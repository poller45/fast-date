
import React from 'react';
import PropTypes from 'prop-types';
import BookMark from "../common/Bookmark"
import Qualities from './qualities';
import Table from '../common/table';
import { Link } from 'react-router-dom';

const UserTable=({users, onSort, selectedSort,onToggleBookMark,onDelete,...rest})=>{

   const columns = {
      name: { path: 'name', name: "Name", component: (user) => <Link to={`/users/${user._id}`}>{user.name}</Link>},
      qualitys: { name: 'Qualitys', component:(user)=> <Qualities qualities={user.qualities}/> },
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