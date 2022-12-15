export default async function getAllPlayers() {
  const response = await fetch("./api/allPlayers");
  if (!response.ok) {
    return console.error(
      "Error with the response of the fetch. Response status: ",
      response.status
    );
  } else {
    const listOfAllPlayers = await response.json();
    setAllPlayers(listOfAllPlayers);
  }
}
