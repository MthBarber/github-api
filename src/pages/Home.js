import React, {useState} from 'react'
import { ShowAUsersRepo } from '../components/ShowAUsersRepo'
import { ShowMyRepos } from '../components/ShowMyRepos'

export const Home = () => {

    const [homeView, setHomeView] = useState(true)

    function handleClick(){
        (homeView === true) ? setHomeView(false) : setHomeView(true)
    }

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <div>Home</div>
        <button 
        onClick={handleClick}
        className="border-x-2 border-y-2 border-purple-600"
        >
            Show Search View
        </button>
        {(homeView === true) ?
        <ShowMyRepos />
        :
        <ShowAUsersRepo userName={"MakersAcademy"} />
        }
    </div>
  )
}
