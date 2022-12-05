import React, {ChangeEvent, FC, SyntheticEvent, useEffect, useState} from "react";



function AuthForm() {

    const[email, setEmail] = useState<string>('');
    const[password, setPassword] = useState<string>('');

    useEffect(() => {
        console.log('Email', email)
        console.log("Password", password)
    }, [email, password]);

    const handleSubmitData = (event: SyntheticEvent) => {
        event.preventDefault()
        console.log("This work", {email: email, password: password})
    }

    const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
        console.log(event)
        //setEmail(email: )
        //({email: event.target.email});
    }

    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
        console.log(event)
    }

    return (
        <form onSubmit={handleSubmitData}>
            <label >
                Email:
                <input type="email" name="email" value={email} onChange={handleEmail}/>
            </label>
            <label>
                Password:
                <input type="password" name="password" value={password} onChange={handlePassword} />
            </label>
            <button type="submit">Click on me</button>

        </form>
    )
}

export default AuthForm