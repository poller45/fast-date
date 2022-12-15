
import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import BookMark from './Bookmark';
import QualitiesList from './QualitiesList';

const UserTable=({users, onSort, selectedSort,onToggleBookMark,onDelete,...rest})=>{

   const columns = {
      name: { path: 'name', name: "Name" },
      qualitys: { name: 'Qualitys', component:(user)=> <QualitiesList qualities={user.qualities}/> },
      profession: { path: 'profession.name', name: 'Profession' },
      completedMeetings: { path: 'completedMeetings', name: "Meetings" },
      rate: { path:"rate", name:'Rate'},
      bokmark: {
         path: "bookmark",
         name: 'Favourites',
         component: (user)=>(<BookMark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />) },
      delete: {component: (user) => (
            <button
               onClick={() => onDelete(user._id)}
               className="btn btn-danger"
            >
            delete
         </button>
      )
}
      
   
   }

return <table className="table table-hover">
   <TableHeader {...{ onSort, selectedSort, columns }} />
   <TableBody {...{columns, data:users} } />

</table>
}
UserTable.propTypes={
   users: PropTypes.array.isRequired,
   onSort: PropTypes.func.isRequired,
   selectedSort: PropTypes.object.isRequired,
   onToggleBookMark: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired
}
export default UserTable