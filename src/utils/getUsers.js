

const getUsers = (getData) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => getData(data))
    .catch(error => console.error(error));
};

export default getUsers;