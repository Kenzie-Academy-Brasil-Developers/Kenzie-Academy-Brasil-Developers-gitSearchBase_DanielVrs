const createrHeader = () => {
	const userGet = JSON.parse(localStorage.getItem("user")) 
	const img = document.querySelector("img")
	const name = document.querySelector(".name-header")
	const button = document.querySelector(".trade-user")
	
	img.src = userGet.avatar_url
	name.innerText= userGet.name
	
	button.addEventListener("click", () => {
		localStorage.clear()
		location.replace("../../index.html")
	})
}
createrHeader()


const renderRepo = async () => {
	const userGet = JSON.parse(localStorage.getItem("user")) 
	const name = userGet.login
	
	const repoGet = await fetch(`https://api.github.com/users/${name}/repos`,{
		method: "GET"
	})
	
	.then(async(response) => {
		
		return response.json()
	})

	repoGet.forEach(element => {
		const profile = document.querySelector(".profile__ul")
		const li = document.createElement("li")
		const h4 = document.createElement("h4")
		const p = document.createElement("p")
		const a = document.createElement("a")
		
		h4.innerText = element.name
		
		if(element.description === null){
			
			p.innerText = "Repositório sem descrição"
			a
		}else{
			p.innerText = element.description
		}

		a.innerText = "Repositório"
		a.href = element.html_url
		a.target = "_blank"

		li.append(h4,p,a)
		profile.appendChild(li)
	});
	
	console.log(repoGet)
}

renderRepo()