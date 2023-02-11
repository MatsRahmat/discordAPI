const content = document.querySelector('#content');
const outSpan = document.getElementById('member');
function getAPI(){
    fetch('https://discordapp.com/api/guilds/657476002502541323/widget.json')
    .then(ress => ress.json())
    .then(obj =>{
        console.log(obj.members); 
        obj.members.forEach((m, i)=> {
            content.innerHTML += `
            <div class="card">
            <img src="${m.avatar_url}" />
            <h2>${m.username}</h2>
            <button onclick="showDetails(${i})">Details</button>
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
function showDetails(index){
    openModal()
    fetch('https://discordapp.com/api/guilds/657476002502541323/widget.json')
    .then(ress => ress.json())
    .then(obj => {
        const member = obj.members;
        modalBody.innerHTML = `
        <div class="modal-header"><span detail-username>Details dari ${member[index].username}</span></div>
        <div class="modal-body">
            <div class="avatar-img">
                <img src="${member[index].avatar_url}" />
            </div>
            <div class="details">
                <h2>Username: ${member[index].username}</h2>
                <p class="status">Status: Sedang Memikirkan kamu</p>
            </div>
        </div>
        <div class="modal-bottom">
            <button onclick="closeModal()">Tutup</button>
        </div>
        `
    })
}

const date = new Date;
const tahun = date.getFullYear();
document.querySelector('.copy-right').innerHTML = 'CopyRight: ' + tahun