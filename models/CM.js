import mongoose from "mongoose";

const CMSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    department: {
      type: String,
      enum: ["Cigar", "Pretzel", "Candy", "Maamol", "Others"],
    },
    isClosed: {
      type: Boolean,
      default: false,
    },
    requestForClose: {
      type: Boolean,
      default: false,
    },
    isPoFullFilled: {
      type: Boolean,
      default: false,
    },
    requestForPoReceived: {
      type: Boolean,
      default: false,
    },
    isPendingPo: {
      type: Boolean,
      default: false,
    },
    closeDate: Date,
    responsible: String,
    accountable: String,
    sparePartsUsed: String,
    sparePartsRequired: String,
    technicalDescription: String,
  },

  { timestamps: true }
);

const CM = mongoose.model("CM", CMSchema);

export default CM;
