import React, { useState } from "react"
import { connect } from "react-redux"

//actions 
import createUser from "../redux/actions/create-user"


const RegisterForm = props => {
    const [fields, setFields] = useState({})

function handleInput(e) {
    e.preventDefault()
    const fields = {}
    fields[e.target.name] = e.target.value
    setFields(fields)
}

function handleSubmit(e) {
    e.preventDefault()
    props.createUser(fields)
}
    return (
        <div className="register-container">
            <form onChange={handleInput} onSubmit={handleSubmit}>
                <input name="username" placeholder="username..." type="text" />
                <input name="password" placeholder="password" type="password" />
                <input name="password" placeholder="password" type="password" />
                <button>Sign Up</button>
            </form>
        </div>
        
    )
}

export default connect(null, { createUser }) (RegisterForm)
