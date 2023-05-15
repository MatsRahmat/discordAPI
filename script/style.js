const slideWord = document.querySelector('.slide--')
setInterval(function(){
    fetch('https://discord.com/api/guilds/657476002502541323/widget.json').then(ress => ress.json()).then(function(ress){
        const index = Math.floor(Math.random() * (ress.members.length))
        slideWord.innerHTML = ress.members[index].username;
        console.log(slideWord.innerHTML);

    })
},2500)