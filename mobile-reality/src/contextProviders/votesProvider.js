import React, { useContext } from "react";
import { useQuery } from "react-query";
import { getVotes } from "../apiRequests";

const VotesContext = React.createContext({});

export const VotesProvider = ({ children }) => {
  const { data, isLoading, error } = useQuery("votes", getVotes);

  if (error) return <h1>Something went wrong...</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return <VotesContext.Provider value={data}>{children}</VotesContext.Provider>;
};

export const useVotesData = () => {
  const votesContext = useContext(VotesContext);
  return votesContext;
};
