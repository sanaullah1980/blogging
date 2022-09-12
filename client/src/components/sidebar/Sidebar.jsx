import React, { useEffect, useState } from 'react';
import axios from "axios";
import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        const getCategories = async () => {
            const res = await axios.get("/category");
            setCategories(res.data);
        }
        getCategories();
    },[])

  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEx9e-hIeBMU1JixptLo_kLa2PEnh1cAKNg&usqp=CAU" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid rem odio iusto possimus tempora labore atque, unde, accusantium doloribus id laboriosam dolores quasi delectus, non aperiam porro earum obcaecati! Veritatis.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {
                    categories.map((c)=>(
                        <Link to={`/?cat=${c.name}`}>
                            <li className='sidebarListItem'>{c.name}</li>
                        </Link>
                    ))
                }
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar