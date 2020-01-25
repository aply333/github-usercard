/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios
//   .get("https://api.github.com/users/tetondan/followers")
//   .then(response =>{
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

let testArray = []

let testData = axios.get("https://api.github.com/users/bigknell");
testData.then(response =>{
  console.log('res',response);
  console.log('login',response.data.followers)
  testArray.push(response.data);
});

let testVar = testData.then(response =>{
  return response.data.followers;
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/



//  Componnents

function imgElement(item){
  let img = document.createElement('img')
  img.setAttribute('src',item.avatar_url)
  return img;
};

function nameH3(item){
  let h3 = document.createElement('h3')
  h3.classList.add('name');
  h3.textContent = item.name;
  return h3;
}

function usernameP (item){
  let p = document.createElement('p');
  p.classList.add('username');
  p.textContent = item.login;
  return p;
}

function locationP (item){
  let p = document.createElement('p');
  p.textContent = `Location: ${item.location}`
  return p;
}

function profileP (item){
  let p = document.createElement('p');
  let a = document.createElement('a');
    a.setAttribute('src', item.html_url)
    a.textContent = item.html_url;
  p.textContent = `Profile: `
  p.appendChild(a)
  return p;
}

function followersP (item){
  let p = document.createElement('p');
  p.textContent = `Followers: ${item.followers}`
  return p;
}

function followingP (item){
  let p = document.createElement('p');
  p.textContent = `Following: ${item.following}`
  return p;
}

function bioP (item){
  let p = document.createElement('p');
  p.textContent = item.bio;
  return p;
}

//  Combines div card
function divCard(item){
  let div = document.createElement('div');
  div.classList.add('card-info')
  div.appendChild(nameH3(item))
  div.appendChild(usernameP(item))
  div.appendChild(locationP(item))
  div.appendChild(profileP(item))
  div.appendChild(followersP(item))
  div.appendChild(followingP(item))
  div.appendChild(bioP(item));
  return div;
}

//  Complete assembly
function completeCard(item){
  let div = document.createElement('div');
  div.appendChild(imgElement(item))
  div.appendChild(divCard(item));
  return div;
}

//  Apending to html

let cards = document.querySelector('.cards');

cards.appendChild(completeCard(testArray));











//  \/ this does not read well \/ 

// function cardCreator (item){
//   let div = document.createElement('div');
//   div.classList.add('card');


//   let divInfo = document.createElement('div');
//   divInfo.classList.add('card-info');
//     let name =document.createElement('h3');
//       name.classList.add('name');
//       name.classList.textContent = item.name;
//       div.appendChild(name);
//     let pUser = document.createElement('p');
//       pUser.classList.add('username');
//       pUser.textContent = item.username;
//       div.appendChild(pUser);
//     let pLocation = document.createElement('p')
//       pLocation.textContent = `Location:${item.location}`;
//       div.appendChild(pLocation);
//     let pProfile = document.createElement('p');
//     let aProLink = document.createElement('a');
//       pProfile.textContent = `Profile:${aProLink}`;
//       div.appendChild(pProfile);
//     let followers = document.createElement('p');
//       followers.textContent = `Followers: ${items.followers}`;
//       div.appendChild(followers);
//     let following = document.createElement('p');
//       following.textContent = `Following: ${items.following}`;
//       div.appendChild(following);
//     let bio = document.createElement('p');
//       bio.textContent = `Bio: ${items.bio}`;
//       div.appendChild(bio);
// }