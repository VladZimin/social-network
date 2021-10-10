import s from './Pagination.module.css'
import React from "react";

let Pagination = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div className={s.pagesBlock}>{pages.map(p => <span
        className={props.currentPage === p ? s.selectedPage : s.pageNum}
        onClick={() => props.onPageClick(p)}>{p}</span>)}
    </div>
}

export default Pagination