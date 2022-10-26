const container = document.querySelector(".conteiner-centro")

async function comentario(div){
    await fetch("https://dummyjson.com/comments")
    .then(res => res.json())
    .then(res => {
        let random = Math.floor(Math.random() * res.comments.length);
        const comentario = res.comments[random]

        const icone_user = document.createElement("img")
        const text_comentario = document.createElement("p")
        const div_comentario = document.createElement("div")

        icone_user.src = "Foto_Projeto/logo-usuario.png"
        text_comentario.textContent = comentario.body

        
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
        icone_user.style = `
        width: 40px;
        `

        div_comentario.appendChild(icone_user)
        div_comentario.appendChild(text_comentario)
        div.appendChild(div_comentario)
    })
}

let qtd_random = Math.floor(Math.random() * 30)

for (let i = 0 ; i < 5 ; i++){
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
            const icon_user = document.createElement("img")
            const img_post = document.createElement("img")
            const h2 = document.createElement("h2")
            const p = document.createElement("p")
    
            // colocando as imagens do post (provisorio)
            icon_user.src = "Foto_Projeto/logo-usuario.png"
            img_post.src = "Foto_Projeto/Paisagem.jpg"
            a.href = "usuario.html"
            a.appendChild(icon_user)
    
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
            width: 30px;
            align-self: flex-start;
            text-decoration: none;
            color: rgb(0, 0, 0);
            margin-right: 10px;
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
            div.appendChild(a)
            div.appendChild(img_post)
            div.appendChild(h2)
            div.appendChild(p)
            comentario(div) 
            container.appendChild(div)
        });
    })
}






