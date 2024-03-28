function readUsers() {
    for (const user of usersArray) {
        container.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title card-title-name">${user.name}</h5>
                <p class="card-text card-text-email">${user.email}</p>
            </div>
        </div>`;
    }
}
readUsers();