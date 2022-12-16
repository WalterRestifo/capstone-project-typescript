import mongoose from "mongoose";

const { Schema } = mongoose;

const allPlayersSchema = new Schema({
  name: { type: String, required: true },
  skill: { type: String, required: true },
  language: [String],
  gender: { type: String, required: true },
});

const AllPlayers =
  mongoose.models.AllPlayers2 ||
  mongoose.model("AllPlayers2", allPlayersSchema);

export default AllPlayers;
