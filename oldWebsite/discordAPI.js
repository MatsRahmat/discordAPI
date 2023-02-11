// Discord API = https://discord.com/api/guilds/657476002502541323/widget.json


fetch('https://discord.com/api/guilds/657476002502541323/widget.json')
.then(ressponse => ressponse.json())
.then(obj => {
    const member = obj.members;
    member.forEach((m) => {
        showData(m);
        // console.log(m.username +" "+ m.status );
        // console.log(m.avatar_url);
    //     const containerCard = document.querySelector(".container-card");
    //     containerCard.innerHTML += `
    //         <div class="card">
    //             <img class="profile-img" src="${m.avatar_url}" alt="" title="${m.username} Pic">
    //             <h2>${m.username}</h2>
    //             <button class="details-btn">Details</button>
    //         </div>
    // `
    })
})


function showData(d){
    const containerCard = document.querySelector(".container-card");
    return containerCard.innerHTML += `
            <div class="card">
                <img class="profile-img" src="${d.avatar_url}" alt="" title="Profile Pict">
                <h2>${d.username}</h2>
                <button class="details-btn">Details</button>
            </div>
    `
}