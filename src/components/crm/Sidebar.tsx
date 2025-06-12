import { Link } from "react-router-dom"
import { BsBarChart } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { BsBullseye } from "react-icons/bs";
import { IoMdCheckboxOutline } from "react-icons/io";
import { BsBox2Heart } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { useState } from "react";




const Sidebar = () => {


    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()
    const cerrarSesion = () => {

        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/auth', { replace: true })
    }

    return (
        <div className={`xl:h-[100vh] overflow-y-scroll scroll-hidden  fixed xl:static w-[80%] xl:w-full md:w-[40%] h-full  top-0 border-r-1 p-4 flex flex-col justify-between z-50 ${showMenu ? "left-0" : "-left-full"} transition-all duration-300`}>
            <div>
                <h1 className='text-center p-4 text-2xl font-bold text-white mb-10'>VentiCRM</h1>

                <ul>
                    <li>

                        <Link
                            
                            className="flex items-center text-sm gap-4 py-2 px-4 rounded-lg hover:bg-[#131517] transition-colors"
                            to='/'>
                            <BsBarChart />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center text-sm gap-4 py-2 px-4 rounded-lg hover:bg-[#131517] transition-colors"
                            to='/clientes'>
                            <FaRegBuilding />
                            Clientes
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center text-sm gap-4 py-2 px-4 rounded-lg hover:bg-[#131517] transition-colors"
                            to='/oportunidades'>
                            <BsBullseye />
                            Oportunidades
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center text-sm gap-4 py-2 px-4 rounded-lg hover:bg-[#131517] transition-colors"
                            to='/'>
                            <IoMdCheckboxOutline />
                            Tareas
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="flex items-center text-sm gap-4 py-2 px-4 rounded-lg hover:bg-[#131517] transition-colors"
                            to='/'>
                            <BsBox2Heart />
                            Productos
                        </Link>
                    </li>
                </ul>
            </div>
            <nav>
                <button onClick={() => cerrarSesion() } className="btn flex items-center text-sm gap-4 py-2 px-4 rounded-lg hover:bg-[#131517] transition-colors">
                    <RiLogoutBoxRLine />
                </button>
            </nav>


            <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden fixed bottom-4 right-4 bg-[#131517] text-black p-3 rounded-full z-50">

                {showMenu ? <RiCloseLine /> : <RiMenu3Line />}

            </button>

        </div>
    )
}

export default Sidebar