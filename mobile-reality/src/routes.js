import Homepage from "./pages/homepage/Homepage";
import AddVote from "./pages/addVote/AddVote";
import Vote from "./pages/vote/Vote";
import Votes from "./pages/votes/Votes";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage,
    exact: true,
  },
  {
    path: "/add-vote",
    name: "Add Vote",
    component: AddVote,
    exact: true,
  },
  {
    path: "/votes",
    name: "Votes",
    component: Votes,
    exact: true,
  },
  {
    path: "/votes/:voteId",
    name: "VoteId",
    component: Vote,
    exact: true,
  },
];

export default routes;
