import React from 'react'
import {gql, useQuery} from '@apollo/client'

const GET_REPO_OWNER = gql`
query ($userName: String!){ 
    repositoryOwner(login: $userName) { 
      avatarUrl
      repositories(last:5) {     
        edges {
          node {
            id
            name
            createdAt
          }
        }
      }     
    }
  }
`

export const ShowAUsersRepo = ({userName}) => {

    const {data, error, loading} = useQuery(
        GET_REPO_OWNER,
        {
            variables: {
                userName: userName,
            }
        }
    );   

    if (error) return <div>There was an error fetching your repository </div>

    if (loading) return <div>Loading....... </div>

  return (
    <div>
        {data.repositoryOwner.repositories.edges.map((repo) => {
            return <div key={repo.node.id}
                    className='border-x-2 border-y-2 border-red-600 my-4 text-center p-4'
            > 
                <p>Repository Name:</p>
                <p>{repo.node.name}</p> 
            </div>
        })}
    </div>
  )
}
