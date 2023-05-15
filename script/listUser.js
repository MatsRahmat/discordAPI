const tbody = document.getElementById('tbody');
const modal = document.querySelector('[data-modal-body]');
const overlay = document.querySelector('.overlay');

function renderTable() {
    const userList = fetch('https://discord.com/api/guilds/657476002502541323/widget.json').then(ress => ress.json()).then(function(ress){
        for(let i = 0; i < ress.members.length; i++) {
        const member = ress.members[i];
        const tr = document.createElement('tr');
        const no = document.createElement('td');
        const avatar = document.createElement('td');
        const img = document.createElement('img')
        const userName = document.createElement('td');
        const status = document.createElement('td');
        no.innerText = parseInt(member.id)+1;
        img.setAttribute('src',member.avatar_url);
        userName.innerText = member.username;
        status.innerText = member.status;
        tr.appendChild(no);
        avatar.appendChild(img)
        tr.appendChild(avatar)
        tr.appendChild(userName)
        tr.appendChild(status)
        tbody.appendChild(tr)
        tr.addEventListener('click', function(){
            let curent = [img.getAttribute('src'),userName.innerText, status.innerText]
            openDialog(curent)
            modal.classList.toggle('active')
            overlay.classList.toggle('active-overlay')
        })
    }
})
}

const alertBox = document.getElementById('alertMsg');
function openDialog([avatarlink, username, status]) {
    modal.innerHTML = `
    <img src="${avatarlink}">
    <h2>${username}</h2>
    <p>${status}</p>
    <button data-button-close>close</button>
    `
    const btnClose = document.querySelector('[data-button-close]');
    btnClose.addEventListener('click',function() {
        modal.classList.toggle('active')
        overlay.classList.toggle('active-overlay')

    })
    console.log(modal);
}

window.onload = function() {
    setTimeout(function(){
        renderTable()
    },1000)
}