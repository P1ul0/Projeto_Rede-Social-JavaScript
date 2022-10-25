const container = document.querySelector(".conteiner-centro")
const gerarPost = ()=>{
    return fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(res => {
    let random = Math.floor(Math.random() * res.posts.length)
    const result = res.posts[random]
    const a = document.createElement("a")
    const img = document.createElement("img")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const a_comentario = document.createElement("a")
    const div = document.createElement("div")
    img.src = "Foto_Projeto/Paisagem.jpg"
    a.href = "usuario.html"
    
    div.appendChild(a)
    div.appendChild(img)
    div.appendChild(h2)
    div.appendChild(p)
    div.appendChild(a_comentario)

    div
    container.appendChild(div)
    })
}
gerarPost()