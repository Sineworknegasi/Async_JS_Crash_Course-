const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getposts(params) {
  setTimeout(() => {
    let output = "";
    posts.forEach((posts, index) => {
      output += `<li>${posts.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error,  something went wrong");
      }
    }, 1000);
  });
}


// createPost({ title: "Post There", body: "This is post There"})
// .then((getposts))
// .catch((error) => console.log(error));



// //Async / Await 
// async function init() {
//     await createPost({ title: "Post There", body: "This is post There"})
//     getposts();
// }

// init();

//Async / Await / fetch 

async function fetchUser() {
   const respose = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await respose.json();
   console.log(data);
}

fetchUser();



//promise.all

// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'good bye');
// })

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());



// Promise.all([promise1, promise2, promise3, promise4]).then((value) => console.log(value));


