import React, { useState } from 'react';
import { Link } from "react-router-dom";
import SuccessPage from './SuccessPage'

function OtpPage() {
    const [otp, setOtp] = useState(0);
    const [showOtp, setShowOtp] = useState(false);

    function prcooed() {
        if (otp == 12345) {
            setShowOtp(true);
        }
    }
    return (
        <div className="col">
            {showOtp ? (
                <SuccessPage otp={setShowOtp}/>
            ) :
                (<div>
                    <input label="OTP" type="number" name="otp" onChange={event => setOtp(event.target.value)} />
                    <button text="Procced" onClick={prcooed}>Procced
                    </button>
                </div>
                )
            }
        </div>

    )
}
export default OtpPage;