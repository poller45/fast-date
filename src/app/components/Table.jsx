import React from 'react';
import PropTypes from 'prop-types';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = ({ onSort, selectedSort, columns, data, children}) => {
   return <table className="table table-hover">
      {children || (<>
         <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data}} />
      </>)}
      
    </table>;
}
  Table.propTypes={
   data: PropTypes.array ,
   onSort: PropTypes ,
   selectedSort: PropTypes.object ,
   columns: PropTypes.object,
   children: PropTypes.array
 
}
export default Table 