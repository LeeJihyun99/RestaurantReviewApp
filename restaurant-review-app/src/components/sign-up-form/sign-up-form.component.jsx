import {set} from 'firebase/database';
import {useState} from 'react';

const DefaultFormFields = {
    displayName: '',
    email: '',
    password:'',
    confirmPassword:''
}

const SignUpForm = ()=> {
    const [formFields, setFormFields] = useState(DefaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    const handleChange = (event)=> {
        const {name,value} = event.target;
        setFormFields({...formFields, [name]:value});
    }
    return(
        <div>
            <h2>Sign up with your email and password</h2>
            <form onSubmit={()=> {}}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} value={displayName} name="displayName"/>
                <label>Email</label>
                <input type="email" required onChange={handleChange} value={email} name="email"/>
                <label>Password</label>
                <input type="password" required onChange={handleChange} value={password} name="password"/>
                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} value={confirmPassword} name="confirmPassword"/>
                <button type='submit'>Signup</button>
            </form>

        </div>
    )
}

export default SignUpForm;