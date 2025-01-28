// Get the container element
const usersContainer = document.getElementById('users-container');

// Fetch users from the API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    // Iterate over the users and display them
    users.forEach(user => {
      // Create a user card
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');

      // Populate the user card with user data
      userCard.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;

      // Append the user card to the container
      usersContainer.appendChild(userCard);
    });
  })
  .catch(error => {
    console.error('Error fetching users:', error);
  });
