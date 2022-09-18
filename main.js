
fetch("https://jsonplaceholder.typicode.com/posts").then((data) => {
    return data.json();
}).then((compledata) => {
    let post="";
    compledata.map((values) => {
        post += `
        <article>
        <h3>${values.userId}</h3>
        <div>
            <h2 id="title">${values.title}</h2>
            <p>${values.body}</p>
        </div>
        <h3>Post#<span id="id">${values.id}</span></h3>
        </article>
        `
    })
    document.getElementById("article").innerHTML = post;

}).catch((err) => {
    console.log(err)
})