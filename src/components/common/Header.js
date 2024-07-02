import React from 'react'
import logisticsUkLogo from "../../assets/logo.png"
import { RiMenuUnfold4Line } from "react-icons/ri";
import { RiMenuFold4Line } from "react-icons/ri";

const Header = ({ expanded, setExpanded }) => {
    return (
        <header className='main-header bg-white py-[20px] px-5 shadow-md'>
            <div className='flex items-center justify-start gap-4'>
                <button onClick={() => setExpanded(!expanded)}>
                    {expanded ? <RiMenuUnfold4Line size="40px" /> : <RiMenuFold4Line size="40px" />}
                </button>
                <img src={logisticsUkLogo} alt='Logistics UK Logo' className='max-w-[300px]' />
            </div>
        </header>
    )
}

export default Header