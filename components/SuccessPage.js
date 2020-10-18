import React from 'react';

function SuccessPage({setShowOtp}){
    return (
        <div>
            {setShowOtp ? (
                <h5>Payment is successful</h5>
            ) : (
                <h5>Payment is unsuccessful</h5>
            )}
            
        </div>
    )
}

export default SuccessPage;