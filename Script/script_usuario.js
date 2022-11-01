window.addEventListener('DOMContentLoaded', () =>{
    const id = sessionStorage.getItem("dados")
    fetch(`https://dummyjson.com/users/${parseInt(id)}`)
    .then(res => res.json())
    .then(res => {
        const img = document.querySelector(".logo-perfil")
        const nome = document.querySelector(".nome")
        const data = document.querySelector(".data")
        const telefone = document.querySelector(".telefone")
        const email = document.querySelector(".email")
        const genero = document.querySelector(".genero")
        img.src = res.image
        nome.textContent = res.username
        data.textContent = res.birthDate
        telefone.textContent = res.phone
        email.textContent = res.email
        genero.textContent = res.gender
    })
})
