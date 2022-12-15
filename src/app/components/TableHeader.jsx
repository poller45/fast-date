import React from 'react';
import PropTypes from 'prop-types';
const TableHeader = ({onSort,selectedSort, columns}) => {

   const handleSort=(item)=>{
      if(selectedSort.iter===item){
            onSort( {
               ...selectedSort, 
               order:selectedSort.order==='asc'?'desc':'asc'})
         }
         else{
            onSort({iter:item, order:'asc'})
         }
   }
   return (  
      <thead>
         <tr>
            {Object.keys(columns).map((column) => (
               <th key={column} onClick={
                  columns[column].iter
                     ? () => handleSort(columns[column].iter)
                     : undefined}
                  {...{role:columns[column].iter&& "button" }}
                  scope="col">{columns[column].name}</th>))}
        {/* <th onClick={()=>handleSort("name")} scope="col">Name</th>
        <th scope="col">Qualitys</th>
        <th onClick={()=>handleSort("profession.name")} scope="col">Profession</th>
        <th onClick={()=>handleSort("completedMeetings")} scope="col">Meetings, times</th>
        <th onClick={()=>handleSort("rate")} scope="col">Rank</th>
        <th onClick={()=>handleSort("bokmark")} scope="col">Favourites</th>
        <th /> */}
    </tr>
</thead>
   );
}
 TableHeader.propTypes={
   columns: PropTypes.object.isRequired,
   onSort: PropTypes.func.isRequired,
   currentSort: PropTypes.object.isRequired
}
export default TableHeader;