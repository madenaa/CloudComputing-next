// js/components/InsertPage.jsx
export default function InsertPage() {
    const insertRecord = (event) => {
		event.preventDefault();
		const title = document.getElementById("title").value;
		const description = document.getElementById("description").value;
		const data = {titlu: title, descriere: description};
		fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
			console.log("New record inserted");
			document.getElementById("title").value = "";
			document.getElementById("description").value = "";
		});
	}

	return (
		<section className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="w-[500px] mx-auto text-center text-6xl font-bold text-sky-400 font-serif hover:font-sans w-[1000px] mx-auto text-center mt-9">Snap your event here</h1>
				<p className="font-sans hover:font-serif w-[1000px] mx-auto text-center mt-4 text-3xl">This is where you insert your event</p>

				<form>
					<div className="mb-6">
						<label htmlFor="title" className="block mb-2 text-sm font-serif text-gray-900 dark:text-white">Event title</label>
						<input type="text" id="title"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="What are you planning to do?" required/>
					</div>
					<div className="mb-6">
						<label htmlFor="description"
						       className="block mb-2 text-sm font-serif text-gray-900 dark:text-white">Event description</label>
						<textarea id="description"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Tell me more about your plans"
                               required/>
					</div>
					<button type="submit"
					       onClick={ insertRecord }
					        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit
					</button>
				</form>
			</div>
		</section>
	)
}