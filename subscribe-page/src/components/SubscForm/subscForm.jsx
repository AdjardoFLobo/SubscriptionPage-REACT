import React, { useState } from 'react';
import './style.css'
import { ReactComponent as DoneSVG } from '../../assets/doneSvg.svg'

function SubscForm({submit,error }) {
    const [firstName, setFirstName]= useState('');
    const [familyName, setFamilyName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [email, setEmail] = useState('');
    const [receiveNews, setReceiveNews]= useState(true);

    return (  
        <form className='SubscForm-form'
        onSubmit={(e)=>{
            
            e.preventDefault();
            submit({firstName, familyName, zipCode, email, receiveNews})
             error({firstName, familyName, zipCode, email, receiveNews});         
                
                }
            }
        >   
            <header className='SubscForm-header'> Subscribe to our site</header>
            <input 
            value={firstName}
            className='SubscForm-input'
            type='text'
            placeholder='Your first name '
            onChange={(e)=>setFirstName(e.target.value)}
            />
            <input 
            value={familyName}
            className='SubscForm-input'
            type='text'
            placeholder='Your family name'
            onChange={(e)=>setFamilyName(e.target.value)}
            />
            <input 
            value={zipCode}
            className='SubscForm-input'
            type='number'
            placeholder='Your zip code'
            onChange={(e)=>setZipCode(e.target.value)}
            />
            <input 
            value={email}
            className='SubscForm-input'
            type='email'
            placeholder='Your email'
            onChange={(e)=>setEmail(e.target.value)}
            />
            <label className='SubscForm-input-newsLetter'>
                Would you like to receive news from us? 
            </label>
            <input
            checked={receiveNews}
            type='checkbox'
            onChange={(e)=>{
                setReceiveNews(e.target.checked);
            }}            
            />
            <button 
            className='SubscForm-submitBtn'>
                <DoneSVG/> 
            </button>

            



        </form>
    );
}

export default SubscForm;