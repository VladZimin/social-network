import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

let Users = (props) => {
    return <div>
        <Pagination currentPage={props.currentPage} onPageClick={props.onPageClick}
                    totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
        {props.users.map(u => <User user={u} followingInProgress={props.followingInProgress}
                                    follow={props.follow} unfollow={props.unfollow}/>)}
    </div>
}

export default Users