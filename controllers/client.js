import CM from "../models/CM.js";

export const getCMs = async (req, res) => {
  try {
    const CMs = await CM.find();
    const userId = req.user;
    return res.status(200).json({ CMs, userId });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getSingleCM = async (req, res) => {
  try {
    const cm = await CM.findById(req.params.id);
    return res.status(200).json({ cm });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateCM = async (req, res) => {
  try {
    const id = req.params.id;
    const responsible = req.body.responsible;
    const accountable = req.body.accountable;
    const technicalDescription = req.body.technicalDescription;
    const sparePartsUsed = req.body.sparePartsUsed;
    const sparePartsRequired = req.body.sparePartsRequired;
    await CM.findOneAndUpdate(
      { _id: id },
      {
        responsible,
        accountable,
        technicalDescription,
        sparePartsUsed,
        sparePartsRequired,
      }
    );
    return res
      .status(200)
      .json({ responsible, accountable, technicalDescription, sparePartsUsed });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const completeCM = async (req, res) => {
  try {
    const id = req.params.id;
    const responsible = req.body.responsible;
    const accountable = req.body.accountable;
    const technicalDescription = req.body.technicalDescription;
    const sparePartsUsed = req.body.sparePartsUsed;

    await CM.findOneAndUpdate(
      { _id: id },
      {
        isClosed: true,
        isPendingPo: false,
        requestForClose: false,
      }
    );
    return res.status(200).json({
      responsible,
      accountable,
      technicalDescription,
      sparePartsUsed,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePO = async (req, res) => {
  try {
    const id = req.params.id;
    const PO = req.body.PO;
    await CM.findOneAndUpdate(
      { _id: id },
      {
        isPendingPo: PO,
        isPoFullFilled: !PO,
      }
    );

    return res.status(200).json({ msg: "Pending PO" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateIsPOcompleted = async (req, res) => {
  try {
    const id = req.params.id;
    const isPoFullFilled = req.body.isPoFullFilled;
    await CM.findOneAndUpdate(
      { _id: id },
      {
        isPoFullFilled: isPoFullFilled,
        isPendingPo: !isPoFullFilled,
        sparePartsRequired: "",
        requestForPoReceived: false,
      }
    );

    return res.status(200).json({ msg: "Pending PO" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateRequestForPoReceived = async (req, res) => {
  try {
    const id = req.params.id;
    await CM.findOneAndUpdate(
      { _id: id },
      {
        requestForPoReceived: true,
      }
    );

    return res.status(200).json({ msg: "Po Has been here" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateRequestForClose = async (req, res) => {
  try {
    const id = req.params.id;
    await CM.findOneAndUpdate(
      { _id: id },
      {
        requestForClose: true,
      }
    );

    return res.status(200).json({ msg: "CM completed" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCM = async (req, res) => {
  try {
    const cm = new CM({
      name: req.body.name,
      description: req.body.description,
      department: req.body.department,
    });
    await cm.save();
    return res.status(200).json({ msg: "CM Created successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
