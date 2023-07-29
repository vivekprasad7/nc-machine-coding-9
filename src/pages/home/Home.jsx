import React from 'react'
import "./Home.css"
import { Sidebar } from '../../components/sidebar/Sidebar'

export const Home = () => {
  return (
    <div className='home-page'>
        <Sidebar/>

        <div className='home-categories'>
            <h2>Categories</h2>

        </div>


    </div>
  )
}
