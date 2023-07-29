import React from 'react'
import "./Home.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { useAppContext } from '../../contexts/AppContext'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const {state, dispatch, categoriesData} = useAppContext()
    const navigate = useNavigate();
  return (
    <div className='home-page'>
        <Sidebar/>

        <div className='home-categories'>
            <h2>Categories</h2>
            {
                categoriesData.map((category) => {

                    return(
                        <div onClick={() => { 
                            dispatch({type:"FILTER_BY_CATEGORY", payload: category.category}) ;
                            navigate("/videos");
                        }} className='category-card'>
                            <img src={category.thumbnail} alt={category.category}/>
                            <p>{category.category}</p>
                        </div>
                    )
                })
            }


        </div>


    </div>
  )
}
