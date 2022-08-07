import React from 'react'

import ContinueButton from '../buttons/ContinueButton';

function SchoolEnter({formData, setFormData, page, setPage}) {
    
    function continueForward () {
        setPage(page + 1)
    }

    return (
        <div>
            <div className='header'>
                <h1>Step 1: School</h1>
            </div>

            <div className='body'>
                <h2>Please Enter Your School Name or Postcode</h2>
                <input
                    type="text"
                    placeholder="Please enter you school postcode"
                    value={formData.schoolSearch}
                    onChange={(event) =>
                        setFormData({ ...formData, schoolSearch: event.target.value })
                        }
                />
                <ContinueButton onClick={continueForward} buttonLabel = "Continue" />
            </div>

            <div className='footer-headers'>

                <div className='header inactive'>
                    <h1>Step 2: Age</h1>
                </div>
                <div className='header inactive'>
                    <h1>Step 3: Vote</h1>
                </div>

            </div>

        </div>
    )
}

export default SchoolEnter