import React from 'react'
import FormInput from '../formInput/FormInput'
import './usersChatComponent.css'

const UsersChatComponent = ({ selectedUser, chatMsg, onChangeChat, chatInputMsg }) => {
    // console.log(selectedUser)
    return (
        <div>
            {
                Object.keys(selectedUser).length ?
                    <div className='chatArea'>
                        <div className='selectedUserName'>
                            <div className='selectedUserImg' style={{ backgroundColor: 'green' }}>{selectedUser.userid[0]} </div>
                            <h3>{selectedUser.userid}</h3>
                        </div>
                        <div className='inputElement'>
                            <FormInput
                                type="text"
                                name="chatIn"
                                value={chatMsg}
                                placeholder="Type a message"
                                onChange={onChangeChat}
                            />
                            <img className='curPtr' onClick={chatInputMsg} height={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dSQbsiPY8iqfkocSbhIdAVP6pyitrWzguQ&usqp=CAU" />
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}

export default UsersChatComponent