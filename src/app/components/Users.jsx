import React,{useState} from "react";
import PropTypes from 'prop-types';
import { paginate } from "../utils/paginate";
import Pagination from "./Pagination";
import User from "./User";


const Users = ({ users, ...rest }) => {
   const count = users.length;
   const pageSize = 4;
   const [currentPage, setCurrentPage]=useState(1)
   const handlePageChange = (pageIndex) => {
      console.log("PageIndex", pageIndex);
   setCurrentPage(pageIndex)
   }

   const userCrop = paginate(users, currentPage, pageSize)
   console.log('UserCrop', userCrop) ;
    return (
        <>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Провфессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User key={user._id} {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
          )}
          <Pagination
             itemsCount={count}
             pageSize={pageSize}
             onPageChange={handlePageChange}
             currentPage={currentPage} />
        </>
    );
};
Users.propTypes = {
   users: PropTypes.array
}
export default Users