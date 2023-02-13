import React, { useEffect, useState } from 'react';
 
import PropTypes from 'prop-types';
import api from "../../../api"
 
import Qualities from '../../ui/qualities';
import { useNavigate } from 'react-router-dom';

const UserPage = ({ userId }) => {
    
   const [user, setUser] = useState()
   useEffect(() => {
      api.users.getById(userId).then((data) => setUser(data));
   })

   const navigate = useNavigate()

   const hahdleToAllUser = () => {
   navigate('/users')
}
   if (user) {
      return <div>
         <h1>{user.name}</h1>
         <h3>Profession :{user.profession.name}</h3>
         <Qualities qualities={user.qualities} />
         <p>Completed meetings:{user.completedMeetings}</p>
         <h2> Rate: {user.rate}</h2>
         <button className='btn btn-success' onClick={()=>hahdleToAllUser()}>All users</button>
      </div>; 
   } else {
      return <h1>Loading...</h1>;
   }
}
UserPage.propTypes = {
   userId: PropTypes.string.isRequired
}
export default UserPage;