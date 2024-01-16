
async function onLoad() {
    data = await fetch("https://randomuser.me/api/")
                .then(data => data.json())
                .catch(err => console.error(err));
    const user = await data.results[0];

    document.getElementById("avatar").src = user.picture.large; 
    const name = `Hi my name is ${user.name.first} ${user.name.last}`;
    email = `Hi my email is ${user.email}` 
    dob = `Hi my birthday is ${new Date(user.birthday).toDateString()}`
    address = `Hi my address is ${user.location.street.number} ${user.location.street.name}`
    phone = `Hi my phone is ${user.phone}` 
    password = `Hi my password is ${user.login.password}` 

    document.getElementById("name").addEventListener("click", ()=> showDetails(name))
    document.getElementById("email").addEventListener("click", () =>showDetails(email))
    document.getElementById("dob").addEventListener("click",()=> showDetails(dob))
    document.getElementById("address").addEventListener("click",()=> showDetails(address))
    document.getElementById("phone").addEventListener("click",()=> showDetails(phone))
    document.getElementById("password").addEventListener("click",()=> showDetails(password))
}

function showDetails(info) {
    content = document.getElementById("content") 
    console.log(info)
    console.log(content)
    content.textContent = info
}

window.addEventListener("load", onLoad);