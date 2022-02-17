import axios from "axios";

export const getVotes = async () =>
  await axios
    .get("https://api.thecatapi.com/v1/votes", {
      headers: {
        "x-api-key": "DEMO-API-KEY",
      },
    })
    .then((response) => response.data);

export const deleteVote = async (voteId) =>
  await axios.delete(`https://api.thecatapi.com/v1/votes/${voteId}`, {
    headers: {
      "x-api-key": "DEMO-API-KEY",
    },
  });
