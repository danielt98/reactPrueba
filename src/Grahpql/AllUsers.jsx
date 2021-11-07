import React, { Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';
import Usuarios from '../components/Usuarios';


const GET_ROCKET_INVENTORY = gql`
query allUsers{
  allUsers{
    edges{
      node{
        id
        email
        password
        isActive
        type
        contact{
          edges{
            node{
              names
              lastnames
              location
            }
          }
        }
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
        data.allUsers.edges.map(user =>(
          <Usuarios key={user.node.id} user={user.node}/>
        ))
      }
    </Fragment>
  );
}
export default AllUsers