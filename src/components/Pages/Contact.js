import React, {useState} from "react";
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        if (inputType === 'email') {
            setEmail(inputValue);
          } else if (inputType === 'name') {
            setName(inputValue);
          } else {
            setText(inputValue);
          }
        };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!name || !email || !text){
            setErrorMessage('Please enter value in all fields')
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        alert(`Thanks for your message, ${name}. I'll get back to you soon.`);

        setName('');
        setText('');
        setEmail('');
        };


    return (
        <div>
      <h2>Contact</h2>
      <form className="form">
        <label for="name">Name: </label>
        <input
        onMouseLeave={(e)=>{
          if(e.target.value === ''){
            setErrorMessage(`${e.target.name} is required`)
          }
        }}
        value={name}
        name="Name"
        required={true}
        onChange={handleInputChange}
        type="text"
        placeholder="name"
        />
        <label for="email">Email: </label>
        <input
          onMouseLeave={(e)=>{
            if(e.target.value === ''){
              setErrorMessage(`${e.target.name} is required`)
            }
          }}
          value={email}
          name="Email"
          required={true}
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <label for="text">Message: </label>
        <textarea
          onMouseLeave={(e)=>{
            if(e.target.value === ''){
              setErrorMessage(`${e.target.name} is required`)
            }
          }}
          value={text}
          rows={4}
          required={true}
          name="Message"
          onChange={handleInputChange}
          placeholder="Your message here..."
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    )
}
