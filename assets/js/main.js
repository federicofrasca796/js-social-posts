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
        username: 'name',
        avatar: 'https://picsum.photos/200',
        date: '01/01/1991',
        likeCounter: '10'
    },
    {
        id: '1',
        quote: 'lorem ipsum sit amet consectetur, adipiscing elit.',
        image: 'https://picsum.photos/600/300',
        username: 'name',
        avatar: 'https://picsum.photos/200',
        date: '01/01/1991',
        likeCounter: '10'
    },
    {
        id: '2',
        quote: 'lorem ipsum sit amet consectetur, adipiscing elit.',
        image: 'https://picsum.photos/600/300',
        username: 'name',
        avatar: 'https://picsum.photos/200',
        date: '01/01/1991',
        likeCounter: '10'
    },
    {
        id: '3',
        quote: 'lorem ipsum sit amet consectetur, adipiscing elit.',
        image: 'https://picsum.photos/600/300',
        username: 'name',
        avatar: 'https://picsum.photos/200',
        date: '01/01/1991',
        likeCounter: '10'
    },
    {
        id: '4',
        quote: 'lorem ipsum sit amet consectetur, adipiscing elit.',
        image: 'https://picsum.photos/600/300',
        username: 'name',
        avatar: 'https://picsum.photos/200',
        date: '01/01/1991',
        likeCounter: '10'
    },
];

const likedId = [0, 2, 3];


//DOM elements

const containerDiv = document.createElement('div');
containerDiv.className = 'container';

/* const cardDiv = document.createElement('div');
cardDiv.className = 'card';

const userDiv = document.createElement('div');
userDiv.className = 'user';

const userTxtDiv = document.createElement('div');
userTxtDiv.className = 'user_txt'; */


containerDiv.innerHTML = `
    <div class="card">
        <div class="user">
            <img src="https://picsum.photos/200" alt="user picture" width ="100%">
            <div class="user_txt">
                <h4 class="username">Name Surname</h4>
                <div class="post_date">x months ago</div>
            </div>
        </div>
        <div class="post">
            <div class="quote">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel modi voluptates, harum sunt tenetur unde quasi a vitae voluptate? Dolor amet voluptatem vel blanditiis. Minima, veniam magni. Tempore, doloribus exercitationem?</div>
            <div class="post_img">
                <img src="https://picsum.photos/600/300" alt="" width ="100%">
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
                Piace a <strong class="like_counter">XX</strong> persone
            </div>
        </div>
    </div>
`


