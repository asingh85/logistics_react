import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SidebarMenu = () => {
    const [menuList, setMenuList] = useState([]);
    const [currentPath, setCurrentPath] = useState("");

    const loadMenuList = async () => {
        await axios.get("http://localhost:3003/data").then(res => {
            setMenuList(res.data);
        })
    };

    useEffect(() => {
        loadMenuList();
        setCurrentPath(window.location.pathname);
    }, []);


    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm max-w-[300px]">
                <ul className="flex-1 px-3">
                    {menuList.map((item, i) => (
                        <li
                            key={i}
                            className={`relative flex items-center my-1 font-medium rounded-md cursor-pointer 
                                        transition-colors group ${item.url === currentPath
                                    ? 'bg-gradient-to-tr from-red-200 to-red-100 text-[#ff0014]'
                                    : 'hover:bg-indigo-50 text-gray-600'}`}
                            onClick={() => setCurrentPath(item.url)}
                        >
                            <Link className="py-2 px-3 w-full" to={item.url}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}

export default SidebarMenu;