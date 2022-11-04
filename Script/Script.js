const container = document.querySelector(".conteiner-centro")
const nome_usuario = document.querySelector(".Nome_usuario")
const icone_usuario = document.querySelector(".img_user")

async function users(icon_user){
    await fetch ("https://dummyjson.com/users")
    .then(res => res.json())
    .then(res => {
        let random = Math.floor(Math.random() * res.users.length);
        const user = res.users[random]
        icon_user.src = user.image
        icon_user.style =`
        width: 100% ;
        background-color: white ;
        border-radius: 20px ;
        `
        icon_user.addEventListener("click", () =>{
            sessionStorage.setItem("dados", user.id)
        })
        
        if (icon_user == icone_usuario) {
            nome_usuario.textContent = user.username
        }
    })
}

        
async function comentario(div){
    await fetch("https://dummyjson.com/comments")
    .then(res => res.json())
    .then(res => {
        let random = Math.floor(Math.random() * res.comments.length);
        const comentario = res.comments[random]

        const icon = document.createElement("img")
        const text_comentario = document.createElement("p")
        const div_comentario = document.createElement("div")
        const a = document.createElement("a")
        text_comentario.appendChild(icon)
        text_comentario.textContent = comentario.body
        users(icon)

        
        div_comentario.style = `
        width: 100%;
        border: 2px solid black;
        display: flex;
        align-items: center;
        align-self: center;
        border-radius: 30px;
        padding: 5px;
        margin: 5px;
        `
        a.style =`
        width: 30px ;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        margin-right: 40px;
        text-decoration: none;
        color: rgb(0, 0, 0);
        background-color: white ;
        border-radius: 20px ;
        `
        a.appendChild(icon)
        div_comentario.appendChild(a)
        div_comentario.appendChild(text_comentario)
        div.appendChild(div_comentario)
    })
}


users(icone_usuario)

async function foto_post(img_post){
    await fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(res => {
        img_post.src = res.message
    })
}

  


let qtd_random = Math.floor(Math.random() * 30)

for (let i = 0 ; i < qtd_random ; i++){
    window.addEventListener('load', event =>{
        event.preventDefault()
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then( res => {
            // randomizando o post
            let random = Math.floor(Math.random() * res.posts.length);
            const post = res.posts[random]
    
            // criando os elementos
            const div = document.createElement("div")
            const a = document.createElement("a")
            const icon = document.createElement("img")
            const img_post = document.createElement("img")
            const h2 = document.createElement("h2")
            const p = document.createElement("p")
            
            
            // colocando as imagens do post (provisorio)
            
            img_post.src = ""
            a.href = "usuario.html"
            a.appendChild(icon)
            
            // colocando o texto no h2 e p
            h2.textContent = post.title
            p.textContent = post.body
    
            
            // estilizando o post
            div.style = `
            heigth: 300px;
            width: 360px;
            margin-top: 200px;
            background-color: #cde54e;
            display: flex;
            flex-direction: column;
            border-radius: 30px;
            padding: 10px;
            `
            a.style = `
            width: 50px;
            align-self: flex-end;
            text-decoration: none;
            color: rgb(0, 0, 0);
            margin-right:10px;
            `
            img_post.style = `
            width: 100%;
            margin-top: 10px;
            border-radius: 10px;
            `
            h2.style = `
            align-self: center;
            margin-top: 10px;
            `
            //colocando as variaveis na div e conteiner
            foto_post(img_post)
            users(icon)
            comentario(div)
            div.appendChild(a)
            div.appendChild(img_post)
            div.appendChild(h2)
            div.appendChild(p) 
            container.appendChild(div)
        });
    })
}






