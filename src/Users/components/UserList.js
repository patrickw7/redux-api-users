import UserListElement from './UserListElement';

const UserList = ({ usersData }) => {
    console.log(usersData);
    return(
        <div>
{usersData.map((user) => {
    return(
        <UserListElement
        key={`user-${user.id}`}
        name={user.name}
        email={user.email}
        phone={user.phone}
        city={user.address.city}

        />
    );
})}
        </div>
    );
};

export default UserList;