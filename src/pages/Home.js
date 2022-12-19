import React from 'react'
import { SearchForRepo } from '../components/SearchForRepo'

export const Home = () => {
  return (
    <div>
        <div>Home</div>
        <SearchForRepo repoName={"cardmarket"} repoOwner={"MthBarber"} />
    </div>
  )
}
