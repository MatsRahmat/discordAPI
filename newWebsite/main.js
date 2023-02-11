const content = document.querySelector('#content');
const outSpan = document.getElementById('member');
function getAPI(){
    fetch('https://discordapp.com/api/guilds/657476002502541323/widget.json')
    .then(ress => ress.json())
    .then(obj =>{ 
        obj.members.forEach((m, i)=> {
            content.innerHTML += `
            <div class="card">
            <img src="${m.avatar_url}" />
            <h2>${m.username}</h2>
            <button open-detail>Details</button>
            </div>
            `
        })
        outSpan.innerHTML = obj.members.length;
    })
}
getAPI()


function tes(a){
    console.log(`button ke ${a} di tekan`);
}
const overlayModal = document.querySelector('.overlay');
const modalBody = document.querySelector('.modal');
const closeModalBtn = document.getElementById('close-modal')
const modalHeaderText = document.querySelector('[detail-username]');
const detailBtn = document.querySelectorAll('button[open-detail]')
console.log(detailBtn);

detailBtn.forEach(btn =>{
    btn.addEventListener('click', function(){
        console.log('ada');
    })
})

function openModal(){
    console.log('ter tekan buka');
    modalBody.classList.add('active-modal');
    overlayModal.classList.add('active-overlay');
}
function closeModal(){
    console.log('tertekan tutup');
    modalBody.classList.remove('active-modal')
    overlayModal.classList.remove('active-overlay')
}
// function showDetails(username){
//     openModal()
//     modalHeaderText.innerHTML = username;

// }