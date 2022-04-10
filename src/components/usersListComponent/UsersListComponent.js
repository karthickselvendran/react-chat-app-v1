import React from 'react'
import FormInput from '../formInput/FormInput'
import SingleUserCard from '../singleUserCard/SingleUserCard'
import './usersListComponent.css'

const UsersListComponent = ({ usersList }) => {
    return (
        <div>
            <FormInput placeholder="search users..." />
            <div className='usersList'>
                {
                    usersList?.length ? usersList.map(({ userid, email, _id }) => {
                        return (
                            <SingleUserCard key={_id} userid={userid} email={email} />
                        )
                    }) : <h1>No users found</h1>
                }
            </div>
        </div>
    )
}

export default UsersListComponent