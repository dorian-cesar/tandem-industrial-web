import mongoose from "mongoose";

const DenunciaSchema = new mongoose.Schema({
  ticketId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mensaje: { type: String, required: true },
  estado: { type: String, default: "pendiente" },
  respuesta: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Denuncia || mongoose.model("Denuncia", DenunciaSchema);
