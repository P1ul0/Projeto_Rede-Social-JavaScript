 const v = [];

 for(let i  = 1 ; i <=30 ; i++ ){
    v.push(i)       
}
v.forEach(index => {
    fetch('https://dummyjson.com/posts/'+index)
    .then(res => res.json())
    .then(res =>))
})
