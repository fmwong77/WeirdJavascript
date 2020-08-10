// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     const firstUser = users[0];
//     console.log(firstUser);
//     return fetch(
//       "https://jsonplaceholder.typicode.com/posts?userId = " + firstUser.id
//     );
//   })
//   .then((response) => response.json())
//   .then((posts) => console.log(posts))
//   .catch((error) => console.log(error));

// async... await
const myAsyncFunction = async () => {
  try {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicod.com/users"
    );
    const users = await usersResponse.json();
    const firstUser = users[0];
    console.log(firstUser);
    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId = " + firstUser.id
    );
    const posts = await postsResponse.json();
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
};

const cleaningTheRoom = async () => {
  try {
    let cleanRoom = new Promise((resolve, reject) => {
      reject(console.log("Room is not cleaned"));
    });
    let removeGarbage = new Promise((resolve, reject) => {
      resolve(console.log("Removed garbage"));
    });
    let eatPizza = new Promise((resolve, reject) => {
      resolve(console.log("Ate pizza"));
    });

    let roomCleaned = await cleanRoom;
    console.log(cleanedRoom);

    let garbageRemoved = await removeGarbage;
    console.log(cleanedRoom);

    let pizzaEaten = await eatPizza;
    console.log(pizzaEaten);
  } catch (error) {
    console.log(error);
  }
};

cleaningTheRoom().then(() => console.log("Great work"));
