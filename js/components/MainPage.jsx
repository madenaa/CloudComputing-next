// js/components/MainPage.jsx
import {useEffect, useState} from "react";

export default function MainPage() {
	const [records, setRecords] = useState([]);
	
	useEffect(() => {
		try{
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, []);

    console.log(records);

	return (
		<section className={"bg-black"}>
            <div className={"container px-6 py-10 mx-auto"}>
                <h1 className={"w-[500px] mx-auto text-center text-6xl font-bold text-sky-400"}>EventSnap</h1>
                <p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-sky-200"}> Never Miss a Moment, Embrace Every Event</p>

                <div className={"grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3"}>
                    {
                        records.map(record => (
                            <div key={record._id}
                            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                            >
                                <h3
                                className={"mb-2 text-2xl font-bold tracking-tight text-gray-900 text-purple-500"}
                                >{record.titlu}  </h3>                        
                                <p className={"font-normal"}>{record.descriere}</p>
                                </div>
                        ))
                    }
                </div>
            </div>
        </section>
	)
}