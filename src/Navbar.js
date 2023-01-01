import { Link } from "react-router-dom"
import { BiArrowToTop , BiArrowFromTop} from "react-icons/bi";
import { useState } from "react";
function Navbar()
{
    const [st,setSt] = useState('-top-full')
    const [btn,setBtn] = useState(0)
    const togGle = ()=>{
        {st=='-top-full'? setSt('top-14') :setSt('-top-full')}
        {st=='-top-full'? setBtn(1):setBtn(0)}
    }
    return ( 
        <nav className="w-100 bg-gray-600 text-white flex place-items-center px-10 h-14">
            <div className="font-bold w-1/3 z-10">
                LOGO
            </div>
            <ol className="w-2/3  place-items-center justify-around px-10 hidden md:flex">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Qari2">Qari2</Link></li>
                <li><Link to="/Surah">Surah</Link></li>
                <li><Link to="/About">About</Link></li>
            </ol>
            <div className="w-2/3 flex place-items-center justify-end px-10 md:hidden">
                <button onClick={togGle}>{btn==0?<BiArrowFromTop/>:<BiArrowToTop/>}</button>
                <ol className={"absolute w-full bg-slate-500 right-0 left-0  "+st}>
                    <li className="p-3 bg-gray-600 border hover:bg-gray-500  font-bold"><Link to="/">Home</Link></li>
                    <li className="p-3 bg-gray-600 border hover:bg-gray-500  font-bold"><Link to="/Qari2">Qari2</Link></li>
                    <li className="p-3 bg-gray-600 border hover:bg-gray-500  font-bold"><Link to="/Surah">Surah</Link></li>
                    <li className="p-3 bg-gray-600 border hover:bg-gray-500  font-bold"><Link to="/About">About</Link></li>
                </ol>
            </div>
        </nav>
    )
}

export default Navbar