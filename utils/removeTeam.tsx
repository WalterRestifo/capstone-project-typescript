import getAllTeams from "./getAllTeams";

export default async function removeTeam(id: string) {
  await fetch("./api/questions/" + id, {
    method: "DELETE",
  });
  getAllTeams();
}
