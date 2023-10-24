function getUserInfo(){
    let username = document.getElementById('username').value;
    let url = `https://api.github.com/users/${username}`;

    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.onreadystatechange = function() {
        if(request.readyState === 4 && request.status === 200){
            let data = JSON.parse(request.responseText);
            displayUserInfo(data);
        }
    }
}


function displayUserInfo(data){
    let infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.avatar_url}" alt="Profile Photo" style="width: 100px;">
        <p>Login: ${data.login}</p>
        <p>URL to Github: <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
        <p>Blog: ${data.blog}</p>
        <p>City: ${data.location}</p>
        <p>Email: ${data.email || 'Not available'}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
    `
}