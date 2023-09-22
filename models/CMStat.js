import mongoose from "mongoose";

const CMStatSchema = new mongoose.Schema(
  {
    CMId: String,
    isClosed: Boolean,
    pendingPo: Boolean,
  },
  { timestamps: true }
);

const CMStat = mongoose.model("CMStat", CMStatSchema);

export default CMStat;
