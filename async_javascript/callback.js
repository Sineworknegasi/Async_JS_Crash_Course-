const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];


function getposts(params) {
    setTimeout( () => {
        let output = '';
        posts.forEach((posts, index) => {
            output += `<li>${posts.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout( () => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: "Post There", body: "This is post There"}, getposts);