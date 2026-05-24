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

for(let j = 0; j < mesfilms.length; j++){
  mesfilmsHTML +=`
  <div class="col">
    <div class="card">
      <img src="${mesfilms[j].poster}" class="card-img-top" alt="${mesfilms[j].titre}">
      <div class="card-body">
        <h5 class="card-title">${mesfilms[j].titre}</h5>
        <p class="card-text">
          Author: ${mesfilms[j].author}<br> 
          Resumer: Ici on retrouve le resumer du filme sur quelques lignes, le genre et la date de sortie.
        </p>
        <p> <button onclick = "voter(${j})">
            <img src = "images/like.png" height="50px">
            </button> 
            <span class="price" id="scoreCourant${j}"></span>  
        </p>
      </div>
    </div>
  </div>  
  `;
}
document.getElementById("mesfilmes").innerHTML = mesfilmsHTML;




function  voter(filmeCourant_) {
      //console.log(filmeCoutant_);
      //console.log(starVotes);
    mesfilms[filmeCourant_].numVotes++;
    mesfilms[filmeCourant_].score++;
    document.getElementById(`scoreCourant${filmeCourant_}`).innerHTML = `${mesfilms[filmeCourant_].score}`;
}

















