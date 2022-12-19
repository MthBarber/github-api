import React from 'react'
import { SearchForRepo } from './SearchForRepo'

export const ShowMyRepos = () => {

    // List of my repo's to iterate through to pass to SearchForRepo component
    const my_repos = [
        { id: 1, name: "me", owner: "MthBarber" },
        { id: 2, name: "hire", owner: "MthBarber" },
        { id: 3, name: "should", owner: "MthBarber" },
        { id: 4, name: "you", owner: "MthBarber" },
        { id: 5, name: "Hey", owner: "MthBarber" },
    ]

    return (
        <div>
            {my_repos.map((repo) => {
                return <div key={repo.id}>
                    <SearchForRepo
                        repoName={repo.name}
                        repoOwner={repo.owner}
                    />
                </div>
            })}
        </div>
    )
}
