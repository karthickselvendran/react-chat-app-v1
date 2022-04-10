import React, { useState } from 'react'
import FormInput from '../formInput/FormInput'
import SingleUserCard from '../singleUserCard/SingleUserCard'
import './usersListComponent.css'

const UsersListComponent = ({ usersList, onChange, search }) => {

    return (
        <div>
            <FormInput name="search" type="text" placeholder="search users..." value={search} onChange={onChange} />
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