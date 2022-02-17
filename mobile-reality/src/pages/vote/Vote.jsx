import React, { useEffect, useState } from "react";
import { deleteVote } from "../../apiRequests";
import axios from "axios";

const Vote = (props) => {
  const { voteId } = props.match.params;
  const [voteInfo, setVoteInfo] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.thecatapi.com/v1/votes/${voteId}`, {
        headers: {
          "x-api-key": "DEMO-API-KEY",
        },
      })
      .then((response) => setVoteInfo(response.data));
  }, [voteId]);

  console.log(voteInfo);

  return (
    <div>
      {voteInfo?.image_id}
      <button onClick={() => deleteVote(voteId)}>delete</button>
    </div>
  );
};

export default Vote;
