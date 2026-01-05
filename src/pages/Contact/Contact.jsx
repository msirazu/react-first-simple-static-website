import { useState } from "react";
import useInputField from "../../hooks/useInputField";

const Contact = () => {
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted successfully', email)
    }

    const handlePasswordOnChange = (e) => {
        const value = e.target.value;
        setPass(value);
        if (value.length < 6) {
            setError('password should be 6 characters +')
        } else {
            setError('');
        }
    }

    const [email, emailOnChange] = useInputField('');

    return (
        <section>
            <div className="flex justify-center items-center h-screen">
                <form onSubmit={handleSubmit} className="border p-10 border-gray-300 rounded-lg w-100">
                    <h3 className="text-center capitalize font-bold text-xl mb-5">contact details</h3>
                    <label htmlFor='email'>Email</label>
                    <br />
                    <input className="border border-gray-400 outline-0 my-2 w-full p-2" type='email' name='email' id='email' defaultValue={email} onChange={emailOnChange} placeholder='Enter Your Email'></input>
                    <br />
                    <label htmlFor='password'>Password</label>
                    <br />
                    <input className="border border-gray-400 outline-0 mt-2 w-full p-2" type='password' name='password' id='password' placeholder='Enter Your Password' value={pass} onChange={handlePasswordOnChange} required></input>
                    <br />
                    <input className="btn mt-5 w-full" type='submit' value='Submit' disabled={error} />
                    {error && (
                        <p className="text-center mt-5 text-red-500">{error}</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;