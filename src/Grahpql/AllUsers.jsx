import React, { Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';
import Usuarios from '../components/Usuarios';


const GET_ROCKET_INVENTORY = gql`
query w{
  users {
    edges {
      node {
        id,
        firstName,
        archived,
        verified,
        email,
        secondaryEmail,
      }
    }
  }
}
`;

function AllUsers() {
  const { loading, data, error } = useQuery(
    GET_ROCKET_INVENTORY
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <Fragment>
      {
        data.users.edges.map(user =>(
          <Usuarios key={user.node.id} user={user.node}/>
        ))
      }
    </Fragment>
  );
}
export default AllUsers