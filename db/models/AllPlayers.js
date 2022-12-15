import mongoose from "mongoose";

const { Schema } = mongoose;

const allPlayersSchema = new Schema({
  text: { type: String, required: true },
  name: { type: String, required: true },
});

const AllPlayers =
  mongoose.models.AllPlayers || mongoose.model("AllPlayers", allPlayersSchema);

export default AllPlayers;
