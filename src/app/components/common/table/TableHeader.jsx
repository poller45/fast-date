import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
const TableHeader = ({onSort,selectedSort, columns}) => {

   const handleSort=(item)=>{
      if(selectedSort.path===item){
            onSort( {
               ...selectedSort, 
               order:selectedSort.order==='asc'?'desc':'asc'})
         }
         else{
            onSort({path:item, order:'asc'})
         }
   }

   const renderSortArrow = (selectedSort, currentPath) => {
      if (selectedSort.path === currentPath) {
         if (selectedSort.order === 'asc') {
            return <FontAwesomeIcon icon={faArrowDown}/>
         }
         else {
            return <FontAwesomeIcon icon={faArrowUp} />
         }
      }
      return null
   }

   return (  
      <thead>
         <tr>
            {Object.keys(columns).map((column) => (
               <th key={column} onClick={
                  columns[column].path
                     ? () => handleSort(columns[column].path)
                     : undefined}
                  {...{role:columns[column].path && "button" }}
                  scope="col">{columns[column].name} {renderSortArrow(selectedSort, columns[column].path)}</th>))}
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