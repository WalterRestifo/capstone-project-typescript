import dbConnect from "../../../db/dbConnect";
import AllPlayers from "../../../db/models/AllPlayers";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const allPlayers = await AllPlayers.find();
      const allPlayersArray = allPlayers.map((player) => {
        return {
          name: player.name,
          id: player._id,
          skill: player.skill,
          language: player.language,
          gender: player.gender,
        };
      });

      res.status(200).json(allPlayersArray);
    } catch (error) {
      res.status(404).json(error);
    }
  } else if (req.method === "POST") {
    try {
      const data = req.body;

      const newPlayer = await AllPlayers.create(data);

      return res.status(201).json(newPlayer);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
