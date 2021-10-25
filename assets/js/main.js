/* 
Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.
Gli attributi minimi del modello di un post: id, contenuto, immagine,
autore (nome, avatar), numero di likes, data creazione.
Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.
*/

const posts = [
    {
        id: '0',
        quote: 'lorem ipsum sit amet consectetur, adipiscing elit.',
        image: 'https://picsum.photos/600/300',
        username: 'Phil Bevone',
        avatar: 'https://picsum.photos/200',
        date: '01/01/1991',
        likeCounter: 0
    },
    {
        id: '1',
        quote: 'lorem ipsum sit amet consectetur, adipiscing elit.',
        image: 'https://picsum.photos/600/300',
        username: 'Debbie Gallagher',
        avatar: 'https://picsum.photos/200',
        date: '01/01/1991',
        likeCounter: 5
    },
    {
        id: '2',
        quote: 'lorem ipsum sit amet consectetur, adipiscing elit.',
        image: 'https://picsum.photos/600/300',
        username: 'Daenerys Squais Targaryen',
        avatar: 'https://picsum.photos/200',
        date: '01/01/1991',
        likeCounter: 1
    },
    {
        id: '3',
        quote: 'lorem ipsum sit amet consectetur, adipiscing elit.',
        image: 'https://picsum.photos/600/300',
        username: 'Giuseppe Lopilato',
        avatar: 'https://picsum.photos/200',
        date: '01/01/1991',
        likeCounter: 7
    },
    {
        id: '4',
        quote: 'lorem ipsum sit amet consectetur, adipiscing elit.',
        image: 'https://picsum.photos/600/300',
        username: 'Pablo Valerio Silva',
        avatar: 'https://picsum.photos/200',
        date: '01/01/1991',
        likeCounter: 2
    },
];

const likedId = [];


//DOM elements

const containerDiv = document.querySelector('.container');

/* const cardDiv = document.createElement('div');
cardDiv.className = 'card';

const userDiv = document.createElement('div');
userDiv.className = 'user';

const userTxtDiv = document.createElement('div');
userTxtDiv.className = 'user_txt'; */


//add container innerHTML as html sample
//substitute array objects properties.
//iterate object's array to display every post
for (const key in posts) {
    containerDiv.innerHTML += `
        <div class="card" data-post-id="${posts[key].id}">
            <div class="user">
                <img src="${posts[key].avatar}" alt="user picture" width ="100%">
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
//select every like button
const likeBtn = document.getElementsByClassName('like_btn');

//add event listener to each like button
for (let i = 0; i < likeBtn.length; i++) {
    const element = likeBtn[i];
    
    element.addEventListener('click', function(){  
        //condition if post's id is contained in liked post's array
        if (likedId.includes(posts[i].id)){
            console.log('already liked');
            //remove post's id from liked post's array
            //change appearance to inactive
            //decrease counter
        } else {
            //push post id inside liked post's array
            likedId.push(posts[i].id)
            console.log(likedId);
            //change button appearance to active
            
            //increase counter
        }

    })
}

// let likeCounter = 0;


