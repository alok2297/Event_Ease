import React from 'react'
import './CheckoutForm.css';
export const CheckoutForm = (props) => {
    return (
        <div className='form-container'>
            <p>Hi {props.title}</p>
            <div className='input-container'>
                <div>
                    <input type="text" placeholder='Full Name' required />
                </div>
                <div>
                    <input type="number" placeholder='+91' />
                </div>
                <div>
                    <input type="email" placeholder='Email Address' required />
                </div>
                <div>
                    <input type="date" placeholder='Function Date' />
                </div>
                <div>
                    <input type="number" placeholder='Number of guest* (min 50)' required/>
                </div>
                <div>
                    <input type="number" placeholder='Number of rooms' />
                </div>
            </div>
            <div className='radio-container'>
                <div>
                    <p>Function Type</p>
                    <div>
                        <input type="radio" name="function-type" id="pre-wedding" />
                        <label htmlFor="pre-wedding">Pre-Wedding</label>
                        <input type="radio" name="function-type" id="wedding" />
                        <label htmlFor="pre-wedding">Wedding</label>
                    </div>
                </div>
                <div>
                    <p>Function Time</p>
                    <div>
                        <input type="radio" name="function-time" id="evening" />
                        <label htmlFor="evening">Evening</label>
                        <input type="radio" name="function-time" id="day" />
                        <label htmlFor="day">Day</label>
                    </div>
                </div>
            </div>
            <div className='button-container'>
                <button>Check Availability & Prices</button>
            </div>
            <div className='label'>
            Complete information ensures you get accurate and timely vendor responses
            </div>
        </div>
    )
}
