import mongoose from "mongoose";

const { Schema } = mongoose;

const allPlayersSchema = new Schema({
  name: { type: String, required: true },
  skill: { type: String, required: true },
  language: { type: String, required: true },
  gender: { type: String, required: true },
});

const AllPlayers =
  mongoose.models.AllPlayers || mongoose.model("AllPlayers", allPlayersSchema);

export default AllPlayers;
