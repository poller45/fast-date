import React,{useState, useEffect} from "react";
import api from "../api";
import _ from "lodash"
import { paginate } from "../utils/paginate";
import Pagination from "./Pagination";
import GroupList from "./GroupList";
import SearchStatus from "./SearchStatus"
import UserTable from "./UsersTable";


const Users = ({ users: allUsers, ...rest }) => {
   const [currentPage, setCurrentPage]=useState(1)
   const[professions,setProfession] = useState()
   const [selectedProf,setSelectedProf]=useState()
   const [sortBy,setSortBy]=useState({iter:'name', order:'asc'}) 
   
   const pageSize = 8;

   useEffect(()=>{
       
      api.professions.fetchAll().then((data)=>setProfession(data))
       
   },[ ])
   useEffect(()=>{setCurrentPage(1)},[selectedProf])
 
   const handleProfessionSelect = item => {
      setSelectedProf(item)
   }
    
   const handlePageChange = (pageIndex) => {
 
   setCurrentPage(pageIndex)
   }

   const handleSort=(item)=>{
      setSortBy(item)
      
   }
 
   const filteredUsers = selectedProf
   ? allUsers.filter(
         (user) =>
             JSON.stringify(user.profession) ===
             JSON.stringify(selectedProf)
     )
   : allUsers;
   
   const count = filteredUsers.length;
   const sortedUsers=_.orderBy(filteredUsers,[sortBy.iter], [sortBy.order]);
   const userCrop = paginate(sortedUsers, currentPage, pageSize)
   const clearFilter=()=>{
      setSelectedProf()
   } 
   
    return (
        
        <div className="d-flex">
        
        
        {professions && (
         <div className="d-flex flex-column flex-shrink-0 p-3">
        <GroupList 
        selectedItem={selectedProf}
        items={professions}
         onItemSelect={handleProfessionSelect}
         /> 
         <button className={"btn btn-secondary mt-2"} onClick={clearFilter}>Clear</button>
         </div>)}
         <div className="d-flex flex-column">
         <SearchStatus length={count}/> 
            {count > 0 && (
               
                <UserTable users={userCrop} onSort={handleSort} selectedSort={sortBy} {...rest} />
                
          )}
          <div className="d-flex justify-content-center">
          <Pagination
             itemsCount={count}
             pageSize={pageSize}
             onPageChange={handlePageChange}
             currentPage={currentPage} />
             </div>
          </div>
          
             </div>
        
    );
};


export default Users