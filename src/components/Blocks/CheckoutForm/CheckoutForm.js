import React, { useState } from 'react'
import './CheckoutForm.css';
import { booking } from 'Api/services';

export const CheckoutForm = (props) => {
    const data = props.data
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        userEmail: '',
        functionDate: '',
        numberOfGuests: '',
        numberOfRooms: '',
        functionType: '',
        functionTime: ''
    });
    const [message, setMessage] = useState("");


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRadioChange = (e) => {
        const { name, id } = e.target;
        setFormData({
            ...formData,
            [name]: id
        });
    };

    const handleSubmit = async (e) => {
        try {
            const response = await booking({...formData, email: data.email})
            if (response.ok) {
                setMessage("Your request is submitted!!")
            }
        } catch (error) {
            setMessage(error.message)
        }
    };
    return (
        <div className='form-container'>
            <p>Hi {data.name}</p>
            <div className='input-container'>
                <div>
                    <input
                        type="text"
                        name="fullName"
                        placeholder='Full Name'
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="contactNumber"
                        placeholder='+91'
                        value={formData.contactNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder='Email Address'
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="date"
                        name="functionDate"
                        placeholder='Function Date'
                        value={formData.functionDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="numberOfGuests"
                        placeholder='Number of guest* (min 50)'
                        min="20"
                        max="500"
                        required
                        value={formData.numberOfGuests}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="numberOfRooms"
                        placeholder='Number of rooms'
                        value={formData.numberOfRooms}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='radio-container'>
                <div>
                    <p>Function Type</p>
                    <div>
                        <input
                            type="radio"
                            name="functionType"
                            id="pre-wedding"
                            checked={formData.functionType === 'pre-wedding'}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="pre-wedding">Pre-Wedding</label>
                        <input
                            type="radio"
                            style={{ marginLeft: "20px" }}
                            name="functionType"
                            id="wedding"
                            checked={formData.functionType === 'wedding'}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="wedding">Wedding</label>
                    </div>
                </div>
                <div>
                    <p>Function Time</p>
                    <div>
                        <input
                            type="radio"
                            name="functionTime"
                            id="evening"
                            checked={formData.functionTime === 'evening'}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="evening">Evening</label>
                        <input
                            type="radio"
                            style={{ marginLeft: "20px" }}
                            name="functionTime"
                            id="day"
                            checked={formData.functionTime === 'day'}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="day">Day</label>
                    </div>
                </div>
            </div>
            <div style={{ color: "red", margin: "10px 0" }}>{message}</div>
            <div className='button-container'>
                <button onClick={handleSubmit}>Check Availability & Prices</button>
            </div>
            <div className='label'>
                Complete information ensures you get accurate and timely vendor responses
            </div>
        </div>
    )
}
