let mesfilms = [{titre:'UsualSuspect', author: 'DSP09', poster: 'images/ususalSuspect.png', score: 0, numVotes: 0},
                  {titre:'Sneakers', author: 'DSP09', poster: 'images/sneakers.png', score: 0, numVotes: 0},
                  {titre:'La La Land', author: 'DSP09', poster: 'images/lalaland.png', score: 0, numVotes: 0},
                  {titre:'Mulan', author: 'DSP09', poster: 'images/mulan.png', score: 0, numVotes: 0},
                  {titre:'Narnia', author: 'DSP09', poster: 'images/narnia.png', score: 0, numVotes: 0},
                  {titre:'MonstreSA', author: 'Rachid', poster: 'images/monsterSA.png', score: 0, numVotes: 0},                  
                  {titre:'RoiLion', author: 'DSP09', poster: 'images/lionKing.png', score: 0, numVotes: 0}];

//let lesfilmesDOM = document.getElementById("mesfilmes");
let mesfilmsHTML = ``;
let starVotes = 0;
let filmeCourantVote = -1;

for(let j = 0; j< mesfilms.length; j++){
  mesfilmsHTML +=`
    <div class="card">
      <img src="${mesfilms[j].poster}" alt="${mesfilms[j].titre}" style="width:100%">
      <h1>${mesfilms[j].titre}</h1>
      <p class="price">${mesfilms[j].author}</p>
      <p class="price" id="scoreCourant${j}">${mesfilms[j].author}</p>
      <div class="rating-box">
        <header>How do you liked it?</header>
      </div>
      <p><button onclick = "voter(${j})"><img src = "images/like.png" class="jouer-image"></button></p>

    </div>
  `;
}

document.getElementById("mesfilmes").innerHTML = mesfilmsHTML;

function  voter(filmeCourant_) {
      //console.log(filmeCoutant_);
      //console.log(starVotes);

  if(filmeCourant_ >= 0){
    mesfilms[filmeCourant_].numVotes++;
    mesfilms[filmeCourant_].score++;
    document.getElementById(`scoreCourant${filmeCourant_}`).innerHTML = `${mesfilms[filmeCourant_].score}`;
  }
}

















