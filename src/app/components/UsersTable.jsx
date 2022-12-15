
import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import TableHeader from './TableHeader';

const UserTable=({users, onSort, selectedSort,...rest})=>{

   const columns = {
      name: { iter: 'name', name: "Name" },
      qualitys: { name: 'Qualitys' },
      profession: { iter: 'profession.name', name: 'Profession' },
      completedMeetings: { iter: 'completedMeetings', name: "Meetings" },
      rate: { iter:"rate", name:'Rate'},
      bokmark: { iter: "bokmark", name: 'Favourites' },
      delete:{}
      
   
   }

return <table className="table table-hover">
   <TableHeader {...{onSort,selectedSort,columns}} />
<tbody>
    {users.map((user) => (
        <User {...rest} {...user} key={user._id} />
    ))}
</tbody>
</table>
}
UserTable.propTypes={
   users: PropTypes.array.isRequired,
   onSort: PropTypes.func.isRequired,
   selectedSort: PropTypes.object.isRequired
}
export default UserTable