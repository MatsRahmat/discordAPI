const data = [{
        nama :"david",
        id: "0",
        umur: "22",
        domisili:"banten"
    },
    {
        nama :"stepen",
        id : "1",
        umur: "21",
        domisili:"bandung"
    },
    {
        nama :"alex",
        id: "2",
        umur: "52",
        domisili:"banten"
    },
    {
        nama :"ujang",
        id: "3",
        umur: "19",
        domisili:"sukabumi"
    },
    {
        nama :"steve",
        id: "4",
        umur: "24",
        domisili:"bogor"
    },
    {
        nama :"ahmad",
        id: "5",
        umur: "23",
        domisili:"bekasi"
    },
    {
        nama :"wiliam",
        id: "6",
        umur: "26",
        domisili:"NTT"
    },
    {
        nama :"jhon",
        id: "7",
        umur: "34",
        domisili:"NYC"
    },
    {
        nama :"bams",
        id: "8",
        umur: "28",
        domisili:"JakTeng"
    },
    {
        nama :"Anonymouse",
        id: "9",
        umur: undefined,
        domisili:null
    }

];


// container card
const card = document.querySelector('.container');


// modal button
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[btn-close-modal]');


// overlay
const overlay = document.getElementById('overlay');

// modal body and title
const modalTitle = document.querySelector('#modal .modal-header .modal-title')
const modalBody = document.querySelector('#modal .modal-body')


// form stringify example
const inputNama = document.getElementById('inputName');
const inputUmur = document.getElementById('umur');
const subBtn = document.getElementById('logThis');

// open modal button
openModalButtons.forEach(btn =>{
    btn.addEventListener('click', () => {
        const modal = document.querySelector(btn.dataset.modalTarget)
        openModal(modal)
    })
})


// close modal button
closeModalButtons.forEach(btn =>{
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal')
        closeModal(modal)
    })
    overlay.addEventListener('click', () => {
        const modal = btn.closest('.modal')
        closeModal(modal)})
})


// overlay.forEach(btn => {
//     btn.addEventListener('click',  () => {
//         const modal = btn.closest('.modal')
//         closeModal(modal)
//     })
// })

// function to open and close modal
function openModal(){
    if(modal == null) return
    modal.classList.add('active-modal')
    overlay.classList.add('active-overlay')
}
function closeModal(){
    if(modal == null) return
    modal.classList.remove('active-modal')
    overlay.classList.remove('active-overlay')
}


data.forEach((d, i) => {
    card.innerHTML += `<div class="cards"><h2>Nama : ${d.nama}</h2><h2> Umur : ${d.umur}</h2><h2> Kota asal : ${d.domisili}</h2><br>
    <button onclick="tes(${i})">Details</button>
    </div>`
})

function tes(a){
    openModal()
    modalTitle.innerHTML = ` Identitas dari ${data[a].nama}`
    modalBody.innerHTML = `Nama : ${data[a].nama} <br> Umurnya : ${data[a].umur} <br> Domisili : ${data[a].domisili}`
    var objData = JSON.parse(`{"nama": "${data[a].nama}", "Umur": "${data[a].umur}"}`)
    console.clear()
    console.log(objData);
}

// subBtn.onchange = function(){
//     var bioku = {fname: inputNama.value, umur: umur.value }
//     console.log(bioku);
//     var jsonText = JSON.stringify(bioku)
//     console.log(jsonText);
// }
