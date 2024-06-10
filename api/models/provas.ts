// provas model
import mongoose from "mongoose";

const ProvasSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "Please provide a name"],
  },
  data: {
    type: Date,
    required: [true, "Please provide a date"],
  },
  nota: {
    type: Number,
    required: [true, "Please provide a grade"],
  },
});

export const Provas = mongoose.models.Provas || mongoose.model("Provas", ProvasSchema);
