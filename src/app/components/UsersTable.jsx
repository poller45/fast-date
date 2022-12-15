
import React from 'react';
import PropTypes from 'prop-types';
import BookMark from './Bookmark';
import QualitiesList from './QualitiesList';
import Table from './Table';

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

   return <Table {...{ onSort, selectedSort, columns, data:users }}/>
}

UserTable.propTypes={
   users: PropTypes.array.isRequired,
   onSort: PropTypes.func.isRequired,
   selectedSort: PropTypes.object.isRequired,
   onToggleBookMark: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired
}
export default UserTable