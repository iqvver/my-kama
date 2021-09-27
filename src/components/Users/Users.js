import React from 'react'
import Paginator from '../common/Paginator/Paginator'
import PaginatorUi from '../common/Paginator/PaginatorUi'
import User from './User'

let Users = (props) => {
    return <>
        <Paginator currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}
            totalUsersCount={props.totalUsersCount}
            pagesCount={props.pagesCount}
            pageSize={props.pageSize} />
        {
            props.users.map(u =>
                <User
                    user={u}
                    followingInProgress={props.followingInProgress}
                    key={u.id}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />
            )
        }
    </>
}

export default Users;