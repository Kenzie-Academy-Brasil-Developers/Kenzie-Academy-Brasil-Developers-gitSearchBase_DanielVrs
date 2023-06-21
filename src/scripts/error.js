
const returnPage = () =>{
	const button = document.querySelector(".newSearch")

	button.addEventListener("click", () =>{
		location.replace("../../index.html")
		console.log("teste")
	})
}

returnPage()