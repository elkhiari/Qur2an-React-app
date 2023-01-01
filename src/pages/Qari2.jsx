import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Qari2()
{
const [long , setLang] = useState(['ar']);
const laNge = (e) => {setLang(e.target.value)
    fetchQuotes();
}
const [response,setResponse] = useState()
    const fetchQuotes = async () => {
		try {
			const res = await axios.get(`https://www.mp3quran.net/api/v3/recent_reads`, {
				params: { language:long},
			});
			setResponse(res.data.reads);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchQuotes();
	}, []);
    return (
        <>
        <div className="px-20 mt-4">
            <select onClick={laNge} multiple id="countries_multiple" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled>Choose Languge {long}</option>
                <option selected value="ar">Arabe</option>
                <option value="eng">English</option>
            </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  p-4">
            {
                response &&
                response.map((data)=>
                    <Container a={data}/>
                )
            }
        </div>
        </>
    )
}
function Container(props) {
 var a = props.a
    return (
        <Link to={'/Surah'+a.name} state="a.name"  className="bg-gray-700 text-white cursor-pointer hover:bg-gray-500 rounded-lg shadow-xl  p-5 flex  place-content-center place-items-center  font-bold " key={a.id.toString()}>{a.name}</Link>
    )
}