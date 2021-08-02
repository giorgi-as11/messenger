import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsOnline, changeName } from '../actions/profile';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
export default function Profile() {
    const dispatch = useDispatch()
    const { age, name, isOnline } = useSelector(state => state.profile)
    const handleNameSubmit = (e, newName) => {
        e.preventDefault()
        console.log('action with', newName)
        dispatch(changeName(e.target.value))
    }
    const handleChange = (event) => {
        dispatch(changeIsOnline(event.target.checked))
    }
    return <div>
        <p><b>name: </b>{name}</p>
        <p><b>age: </b>{age}</p>
        <p><b>isOnline: </b>{isOnline.value}</p>
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
        <input onChange={handleNameSubmit} />
    </div>

}

