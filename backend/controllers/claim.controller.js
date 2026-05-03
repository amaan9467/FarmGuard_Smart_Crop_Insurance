import Claim from "../models/claim.model.js";
import Enrollment from "../models/enrollment.model.js";

// @route POST /api/claims
export const fileClaim = async (req, res) => {
  try {
    const { enrollmentId, farmLocation, damageType, damageDescription, damageDate, estimatedLoss, documents } = req.body;
    const userId = req.user.id;

    const enrollment = await Enrollment.findOne({ _id: enrollmentId, userId }).populate("policyId");
    if (!enrollment) {
      return res.status(404).json({ msg: "Enrollment not found" });
    }

    if (enrollment.status !== "active") {
      return res.status(400).json({ msg: "Enrollment is not active" });
    }

    const claim = new Claim({
      userId,
      policyId: enrollment.policyId._id,
      enrollmentId,
      farmLocation,
      damageType,
      damageDescription,
      damageDate,
      estimatedLoss,
      documents,
    });

    await claim.save();

    res.status(201).json({ msg: "Claim filed successfully", claim });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

// @route GET /api/claims/my-claims
export const getMyClaims = async (req, res) => {
  try {
    const claims = await Claim.find({ userId: req.user.id }).populate("policyId");
    res.json(claims);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

// @route GET /api/claims/:id
export const getClaimById = async (req, res) => {
  try {
    const claim = await Claim.findOne({ _id: req.params.id, userId: req.user.id }).populate("policyId");
    if (!claim) return res.status(404).json({ msg: "Claim not found" });
    res.json(claim);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

// @route PUT /api/claims/:id
// Usually for user to update docs or admin to update status
export const updateClaim = async (req, res) => {
  try {
    const { documents, additionalNotes } = req.body;
    const claim = await Claim.findOne({ _id: req.params.id, userId: req.user.id });

    if (!claim) return res.status(404).json({ msg: "Claim not found" });

    if (claim.status !== "pending") {
      return res.status(400).json({ msg: "Cannot update claim once under review" });
    }

    if (documents) claim.documents = [...claim.documents, ...documents];
    if (additionalNotes) claim.damageDescription += `\n\nUpdate: ${additionalNotes}`;

    await claim.save();
    res.json({ msg: "Claim updated successfully", claim });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};
