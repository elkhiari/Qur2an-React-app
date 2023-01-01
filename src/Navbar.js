import { Link } from "react-router-dom"
function Navbar()
{
    return ( 
        <nav className="w-100 bg-gray-600 text-white flex place-items-center px-10 h-14">
            <div className="font-bold w-1/3">
                LOGO
            </div>
            <ol className="w-2/3 flex place-items-center justify-around px-10">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Qari2">Qari2</Link></li>
                <li><Link to="/Surah">Surah</Link></li>
                <li><Link to="/About">About</Link></li>
            </ol>
        </nav>
    )
}

export default Navbar