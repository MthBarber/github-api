import React from "react";
import { SearchForRepo } from "./SearchForRepo";

export const ShowMyRepos = () => {
  // List of my repo's to iterate through to pass to SearchForRepo component
  const my_repos = [
    { id: 1, name: "Hey", owner: "MthBarber" },
    { id: 2, name: "you", owner: "MthBarber" },
    { id: 3, name: "should", owner: "MthBarber" },
    { id: 4, name: "hire", owner: "MthBarber" },
    { id: 5, name: "me", owner: "MthBarber" },
  ];

  return (
    <div className="w-1/3 border-x-2 border-y-2 border-black">
      {my_repos.map((repo) => {
        return (
          <div key={repo.id}>
            <SearchForRepo repoName={repo.name} repoOwner={repo.owner} />
          </div>
        );
      })}
    </div>
  );
};
