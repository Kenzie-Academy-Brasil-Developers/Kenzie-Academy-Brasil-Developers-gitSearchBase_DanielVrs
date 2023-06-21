
const searchUser = () =>{
	
	const input = document.querySelector(".index__input")
	const button = document.querySelector(".index__button")
	
	button.addEventListener("click", async ()=> {
		
		const inputValue = input.value
		const user = await fetch(`https://api.github.com/users/${inputValue}`,{
			method: "GET"
		})
		
		.then(async(response) => {
			
			if(response.ok){
				const responseConvert = await response.json()
				
				localStorage.setItem("user", JSON.stringify(responseConvert))
				location.replace("./src/pages/profile.html")
			}
			else{
				location.replace("./src/pages/error.html")
			} 
		})
		return user
	})
	
	document.addEventListener("keydown", async (event) =>{
		
		event.key === "Enter" && ( async() => {
			event.preventDefault()
			const inputValue = input.value
			const user = await fetch(`https://api.github.com/users/${inputValue}`,{
				method: "GET"
			})
			
			.then(async(response) => {
				
				if(response.ok){
					const responseConvert = await response.json()
					
					localStorage.setItem("user", JSON.stringify(responseConvert))
					location.replace("./src/pages/profile.html")
				}
				else{
					location.replace("./src/pages/error.html")
				} 
			})
			return user
			
		})()
	});
}

searchUser()