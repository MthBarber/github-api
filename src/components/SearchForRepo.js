import React from 'react'
import { gql, useQuery } from '@apollo/client'

const SEARCH_FOR_REPO = gql`
    query ($name: String!, $owner: String!){ 
        repository(name: $name, owner: $owner), { 
        name,
        forkCount,
        stargazerCount,
        url
    }
  }
`
export const SearchForRepo = ({ repoName, repoOwner }) => {

    const { data, error, loading } = useQuery(
        SEARCH_FOR_REPO,
         {
            variables: {
                name: repoName,
                owner: repoOwner,
            }
        }
    );

    if (loading) return <div>Your data is loading...</div>

    if (error) return <div>There was an error fetching your data!</div>

    return (
        <section key={data.id}
            className="my-4"
        >
            <div className='flex flex-col items-center justify-center'>
                <a href={data.repository.url}>
                    Repository Name: {data.repository.name}
                </a>
                <p>Fork Count: {data.repository.forkCount}</p>
                <p>Number of Stars: {data.repository.stargazerCount}</p>
            </div>
        </section>
    )
}
