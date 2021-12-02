import { useEffect, useState } from 'react';
import getUsers from '../../utils/getUsers';
import UserList from '../components/UserList';

const Users = () => {
const [usersData, setUsersData] = useState([]);

useEffect(() => {
    getUsers(setUsersData);
},[]);
    return (
<div>
    <UserList usersData={usersData}/>
</div>
    );
};

export default Users;