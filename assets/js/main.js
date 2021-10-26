/* 
Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.
Gli attributi minimi del modello di un post: id, contenuto, immagine,
autore (nome, avatar), numero di likes, data creazione.
Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.
*/

const posts = [
    {
        id: 0,
        quote: 'lorem ipsum sit amet consectetur, adipiscing elit.',
        image: 'https://picsum.photos/600/300',
        username: 'Phil Bevone',
        avatar: 'https://picsum.photos/200',
        date: '01/01/1991',
        likeCounter: 0
    },
    {
        id: 1,
        quote: 'lorem ipsum sit amet consectetur, adipiscing elit.',
        image: 'https://picsum.photos/600/300',
        username: 'Debbie Gallagher',
        avatar: 'https://picsum.photos/200',
        date: '01/01/1991',
        likeCounter: 5
    },
    {
        id: 2,
        quote: 'lorem ipsum sit amet consectetur, adipiscing elit.',
        image: 'https://picsum.photos/600/300',
        username: 'Daenerys Squais Targaryen',
        avatar: '',
        date: '01/01/1991',
        likeCounter: 1
    },
    {
        id: 3,
        quote: 'lorem ipsum sit amet consectetur, adipiscing elit.',
        image: 'https://picsum.photos/600/300',
        username: 'Giuseppe Lopilato',
        avatar: 'https://picsum.photos/200',
        date: '01/01/1991',
        likeCounter: 7
    },
    {
        id: 4,
        quote: 'lorem ipsum sit amet consectetur, adipiscing elit.',
        image: 'https://picsum.photos/600/300',
        username: 'Pablo Valerio Silva',
        avatar: '',
        date: '01/01/1991',
        likeCounter: 2
    },
];


//DOM elements

const containerDiv = document.querySelector('.container');



//iterate object's array to display every post
for (const key in posts) {

    //BONUS 2: add fallback icon in case it's missing from object
    let avatarHTML = `<img src="${posts[key].avatar}" alt="user picture" width ="100%">`
    let nameInitials = '';

    if (posts[key].avatar == '' || posts[key].avatar == undefined){
        //select username value and split each name
        const userNameArr = posts[key].username.split(' ');
        //select first letter of each name
        for (let i = 0; i < userNameArr.length; i++) {
            nameInitials += userNameArr[i].charAt(0);
        }
        //put initials in innerhtml
        avatarHTML = `<div class="fallback_avatar">${nameInitials}</div>`
    }
    

    //add elements in DOM
    containerDiv.innerHTML += `
        <div class="card" data-post-id="${posts[key].id}">
            <div class="user">
                ${avatarHTML}
                <div class="user_txt">
                    <h4 class="username">${posts[key].username}</h4>
                    <div class="post_date">${posts[key].date}<!-- x months ago --></div>
                </div>
            </div>
            <div class="post">
                <div class="quote">${posts[key].quote}</div>
                <div class="post_img">
                    <img src="${posts[key].image}" alt="" width ="100%">
                </div>
            </div>
            <div class="likes">
                <div class="like_cta">
                    <button class="like_btn">
                        <i class="fas fa-thumbs-up"></i>
                        <span>Mi piace</span>
                    </button>
                </div>
                <div class="like_amount">
                    Piace a <strong class="like_counter">${posts[key].likeCounter}</strong> persone
                </div>
            </div>
        </div>
    ` 
}


//select each like button
const likeBtn = document.getElementsByClassName('like_btn');
//select like_counter
const likeCounter = document.getElementsByClassName('like_counter');

//initialize empty array to store liked posts' id.
let likedId = [];

//add event listener to each like button
for (let i = 0; i < likeBtn.length; i++) {
    const element = likeBtn[i];
    const counterClass = likeCounter[i];
    const id = posts[i].id;
    let clicksNum = 1;

    element.addEventListener('click', function(){  
        //condition if post's id is contained in liked post's array
        if (!likedId.includes(id)){
            //push post id inside liked post's array
            likedId.push(id)
            console.log(likedId);
            //change button appearance to active
            this.classList.add('liked');
            //update value of counter in DOM
            counterClass.innerHTML = posts[i].likeCounter + 1;
            //update value in object list
            posts[i].likeCounter += 1;


            console.log(likedId.indexOf(id));


        } else {
            // console.log('already liked');

            //remove post's id from liked post's array 
            
                //THIS DOESN'T WORK
                // likedId = likedId.filter(isIdThere(likedId, id));
                // console.log(likedId);

                //select current id position in liked post's array
                const idIndex = likedId.indexOf(id);
                //remove id from array
                likedId.splice(idIndex, 1);

            
            //change appearance to inactive
            this.classList.remove('liked');

            //allow to decrease likeCounter only once.
            clicksNum--
            if (clicksNum >= 0){
                //update value in object list
                posts[i].likeCounter -= 1;
            }
            //update value of counter in DOM
            counterClass.innerHTML = posts[i].likeCounter;
        }
    })
}


function isIdThere(likedArray, currentId){
    if(likedArray.includes(currentId)){
        return false;
    }
    return true;
}
