import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsOnline, changeName, changeIsOnlineThunk } from '../actions/profile';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '../Input/Input'
export default function Profile() {
    const dispatch = useDispatch()


    const { age, name, isOnline, } = useSelector(state => state.profile)


    const handleNameSubmit = (newName) => {
        console.log('action with', newName)
        dispatch(changeName(newName))
    }

    const handleChange = (event) => {
        dispatch(changeIsOnlineThunk(event.target.checked))
    }
    return <div>
        <p><b>name: </b>{name}</p>
        <p><b>age: </b>{age}</p>
        <FormControlLabel
            control={
                <Checkbox
                    checked={isOnline}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
            }
            label="Is online "
        />
        <Input onSubmit={handleNameSubmit} />
    </div>

}

