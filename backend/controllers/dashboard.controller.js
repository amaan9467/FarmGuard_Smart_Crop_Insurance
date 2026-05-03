import Enrollment from "../models/enrollment.model.js";
import Claim from "../models/claim.model.js";
import InsurancePolicy from "../models/insurancePolicy.model.js";

// @route GET /api/dashboard/stats
export const getDashboardStats = async (req, res) => {
  try {
    const userId = req.user.id;

    const enrollments = await Enrollment.find({ userId, status: "active" }).populate("policyId");
    const activePolicies = enrollments.length;

    let totalCoverage = 0;
    enrollments.forEach((e) => {
      totalCoverage += e.policyId.coverageAmount * e.cropDetails.farmArea;
    });

    const pendingClaims = await Claim.countDocuments({
      userId,
      status: { $in: ["pending", "under_review"] },
    });

    res.json({
      activePolicies,
      totalCoverage,
      pendingClaims,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

// @route GET /api/dashboard/recent-activity
export const getRecentActivity = async (req, res) => {
  try {
    const userId = req.user.id;

    // Get recent claims
    const claims = await Claim.find({ userId })
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("policyId");

    // Get recent enrollments
    const enrollments = await Enrollment.find({ userId })
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("policyId");

    // Combine and sort
    const activities = [
      ...claims.map((c) => ({
        id: c._id,
        type: "CLAIM",
        title: `Claim for ${c.policyId.name}`,
        date: c.createdAt,
        status: c.status,
      })),
      ...enrollments.map((e) => ({
        id: e._id,
        type: "ENROLLMENT",
        title: `Enrolled in ${e.policyId.name}`,
        date: e.createdAt,
        status: e.status,
      })),
    ].sort((a, b) => b.date - a.date).slice(0, 10);

    res.json(activities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};
