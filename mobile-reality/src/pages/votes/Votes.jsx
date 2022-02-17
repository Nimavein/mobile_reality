import React from "react";
import { useVotesData } from "../../contextProviders/votesProvider";
import { deleteVote } from "../../apiRequests";
import { Link } from "react-router-dom";

const Votes = () => {
  const votes = useVotesData();

  return (
    <div>
      {votes.map((vote) => {
        return (
          <div key={vote.id}>
            <Link
              to={{
                pathname: `/votes/${vote.id}`,
                state: { voteId: vote.id },
              }}
            >
              {vote.image_id}
            </Link>{" "}
            <button onClick={() => deleteVote(vote.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Votes;
