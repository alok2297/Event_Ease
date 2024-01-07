import { Container } from '../../Elements/Container';
import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './NewsLetter.css';

const NewsLetter = () => {
  const [value, setValue] = useState();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      children={
        <div className='Conatiner'>
          <div className='wrapper'>
            <div className='wrapper-container'>
              <div className='wrppaer-left'>
                <div className='NewsLetter'>Download the EventEase Mobile App Today!</div>
                <div className='NewsLetter-icons'>
                  <div>
                    <img src='https://image.wedmegood.com/resized/20X/images/banner/light_bulb.svg' alt='' />
                    Save Wedding Ideas
                  </div>
                  <div>
                    <img src='https://image.wedmegood.com/resized/20X/images/banner/light_bulb.svg' alt='' />
                    Shortlist Vendors
                  </div>
                  <div>
                    <img src='https://image.wedmegood.com/resized/20X/images/banner/light_bulb.svg' alt='' />
                    Get Free Wedding Checklist
                  </div>
                </div>
                <p className='text'>You will receive an SMS with a link to Download the App!</p>
                <div className='form-mob'>
                  <PhoneInput
                    className='form-mob'
                    placeholder='Enter phone number'
                    value={value}
                    onChange={handleChange}
                    defaultCountry='IN'  
                  />
                  <button type='button'>Download the App</button>
                </div>
              </div>
              <div className='wrapper-right'>
                <div className="h-100 sc-hmyDHa dpBVyf">
                  <span>
                    <img src="https://image.wedmegood.com/resized/500X/images/banner/download_app.jpg" alt="download-app" className="w-100 h-100 img" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default NewsLetter;
