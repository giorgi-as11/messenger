import { Button, TextField, Checkbox, FormControlLabel } from '@material-ui/core'
import React from 'react'
import firebase from 'firebase'

export default function Login() {
    const [email, setEmail] = React.useState('')
    const [pasword, setPasword] = React.useState('')
    const [error, setError] = React.useState('')
    const [isAuthed, setIsAuthed] = React.useState(false)

    const handleChangeEmail = (e) => setEmail(e.target.value)
    const handleChangePassword = (e) => setPasword(e.target.value)

    const handleSignIn = async (e) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, pasword)
        } catch (err) {
            setError(err.message)
        }
        console.log({ email, pasword })
    }

    const handleRegistration = async (e) => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, pasword)
        } catch (err) {
            setError(err.message)
        }
        console.log({ email, pasword })
    }

    const handleChangeIsAuthed = (e) => {
        setIsAuthed(e.target.checked)
        console.log(isAuthed)
    }

    const handleSubmit = (e) => {

        if (!isAuthed) {
            handleSignIn()
            return
        }

        handleRegistration()
        return

    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}>
            <p>{isAuthed ? 'registration' : 'Sign in'}</p>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isAuthed}
                        onChange={handleChangeIsAuthed}
                        name="checkedB"
                        color="primary"
                    />
                }
                label="click for Registration"
            />
            <TextField
                className="child__text-field bordered"
                variant="outlined"
                type='email'
                value={email}
                placeholder='Enter Your Email'
                onChange={handleChangeEmail}
            />
            <TextField
                className="child__text-field bordered"
                variant="outlined"
                type='text'
                value={pasword}
                placeholder='Enter Your Email'
                onChange={handleChangePassword}
            />
            <button onClick={handleSubmit}>{isAuthed ? 'registration' : 'Sign in'}</button>

            <p style={{ color: 'red' }}>{error}</p>
        </div>)
}