import InsurancePolicy from "../models/insurancePolicy.model.js";
import Enrollment from "../models/enrollment.model.js";

// @route GET /api/insurance/policies
export const getPolicies = async (req, res) => {
  try {
    const policies = await InsurancePolicy.find({ isActive: true });
    res.json(policies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

// @route GET /api/insurance/policies/:id
export const getPolicyById = async (req, res) => {
  try {
    const policy = await InsurancePolicy.findById(req.params.id);
    if (!policy) return res.status(404).json({ msg: "Policy not found" });
    res.json(policy);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

// @route POST /api/insurance/enroll
export const enrollInPolicy = async (req, res) => {
  try {
    const { policyId, cropType, farmArea, season } = req.body;
    const userId = req.user.id;

    const policy = await InsurancePolicy.findById(policyId);
    if (!policy) return res.status(404).json({ msg: "Policy not found" });

    // In a real app, integrate payment gateway here (e.g., Razorpay)
    const premiumPaid = policy.premiumAmount * farmArea; // simple calculation

    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + policy.durationMonths);

    const enrollment = new Enrollment({
      userId,
      policyId,
      premiumPaid,
      expiryDate,
      cropDetails: { cropType, farmArea, season },
    });

    await enrollment.save();

    res.status(201).json({ msg: "Successfully enrolled in policy", enrollment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

// @route GET /api/insurance/my-enrollments
export const getMyEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ userId: req.user.id }).populate("policyId");
    res.json(enrollments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

// @route PUT /api/insurance/enrollments/:id/cancel
export const cancelEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.findOne({ _id: req.params.id, userId: req.user.id });
    if (!enrollment) return res.status(404).json({ msg: "Enrollment not found" });

    if (enrollment.status === "cancelled" || enrollment.status === "expired") {
      return res.status(400).json({ msg: "Cannot cancel this enrollment" });
    }

    enrollment.status = "cancelled";
    await enrollment.save();

    res.json({ msg: "Enrollment cancelled successfully", enrollment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};
