import React, { useState } from 'react';

import './form-field.css';

const FormFields = () => {
    const [openAccordion1, setOpenAccordion1] = useState(false);
    const [openAccordion2, setOpenAccordion2] = useState(false);
    const [openAccordion3, setOpenAccordion3] = useState(false);

    const handleNextStep1 = () => {
        if (openAccordion1) {
            setOpenAccordion1(false);
        } else {
            setOpenAccordion1(true);
        }
    }

    const handleNextStep2 = () => {
        if (openAccordion2) {
            setOpenAccordion2(false);
        } else {
            setOpenAccordion2(true);
        }
    }

    const handleNextStep3 = () => {
        if (openAccordion3) {
            setOpenAccordion3(false);
        } else {
            setOpenAccordion3(true);
        }
    }

    return (
        <div>
            <form method="post">
                <div className="accordion-container">
                    <div className="step" onClick={handleNextStep1}>
                        <h5>Step 1: Your details</h5>
                    </div>
                    <div className={openAccordion1 ? "accordion__inputs--container openAccoerdion" : "accordion__inputs--container"}>
                        <div className="accordion__input">
                            <label htmlFor="step-1">First Name</label>
                            <input className="accordion__input-field" type="text" id="step-1" required />
                        </div>

                        <div className="accordion__input">
                            <label htmlFor="step-2">Surname</label>
                            <input className="accordion__input-field" type="text" id="step-2" required />
                        </div>

                        <div className="accordion__input">
                            <label htmlFor="step-3">Email Address:</label>
                            <input className="accordion__input-field" type="email" id="step-3" required />
                        </div>
                        <button type="button" onClick={handleNextStep1}>Next {'>'}</button>
                    </div>
                </div>

                <div className="accordion-container">
                    <div className="step" onClick={handleNextStep2}>
                        <h5>Step 2: More comments</h5>
                    </div>
                    <div className={openAccordion2 ? "accordion__inputs--container openAccoerdion" : "accordion__inputs--container"}>
                        <div className="accordion__input">
                            <label htmlFor="telephone">Telephone</label>
                            <input className="accordion__input-field" type="tel" id="telephone" required />
                        </div>

                        <div className="accordion__input">
                            <label htmlFor="gender">Gender</label>
                            <select className="accordion__input-field" name="gender" id="gender" >
                                <option value="" disabled selected hidden>select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="accordion__input">
                            <label htmlFor="step-3">Date of birth</label>
                            <div>
                                <input className="accordion__input-date" type="text" id="step-3" required />
                                <input className="accordion__input-date" type="text" id="step-3" required />
                                <input className="accordion__input-date" type="text" id="step-3" required />
                            </div>
                        </div>
                        <button onClick={handleNextStep2}>Next {'>'}</button>
                    </div>
                </div>

                <div className="accordion-container">
                    <div className="step" onClick={handleNextStep3}>
                        <h5>Step 3: Final comments</h5>
                    </div>
                    <div className={openAccordion3 ? "accordion__inputs--container openAccoerdion" : "accordion__inputs--container"}>
                        <div className="accordion__input">
                            <label htmlFor="txtname">Comments</label>
                            <textarea id="txtid" name="txtname" rows="8" cols="40" maxlength="200" />
                        </div>
                        <button onClick={handleNextStep3}>Next {'>'}</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormFields;
