import styled from "styled-components";
const UserListElement = ({ name, email, phone,city }) => {

    const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
    return(
        <div>
<Title>{name}</Title>
<span>{email}</span>
<span>{phone}</span>
<span>{city}</span>
        </div>
    );
};

export default UserListElement;