import React, { useState } from 'react';
import Button from './Button';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

import './form-field.css';

const FormFields = () => {
    const [nameAlertMessage, setAlertMessage] = useState('');
    const [surnameAlertMessage, setSurnameAlertMessage] = useState('');
    const [emailAlertMessage, setEmailAlertMessage] = useState('');
    const [telephoneAlertMessage, setTelephoneAlertMessage] = useState('');
    const [genderAlertMessage, setGenderAlertMessage] = useState('');
    const [dayAlertMessage, setDayAlertMessage] = useState('');
    const [monthAlertMessage, setMonthAlertMessage] = useState('');
    const [yearAlertMessage, setYearAlertMessage] = useState('');
    const [commentAlertMessage, setCommentAlertMessage] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [gender, setGender] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [comments, setComments] = useState('');
    const [openAccordion1, setOpenAccordion1] = useState(false);
    const [openAccordion2, setOpenAccordion2] = useState(false);
    const [openAccordion3, setOpenAccordion3] = useState(false);

    const history = useHistory();

    const data = {
        "firstName": firstName,
        "surname": surname,
        "email": email,
        "telephone": telephone,
        "gender": gender,
        "dateOfBirth": `${day}-${month}-${year}`,
        "comments": comments
    };


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

    const handleSelectChange = (e) => {
        setGender(e.target.value);
    }

    const handleButton1 = () => {
        if (!firstName) {
            setAlertMessage('You need to enter a name!')
        } else {
            setAlertMessage('');
        }

        if (!surname) {
            setSurnameAlertMessage('You need to enter a surname!')
        } else {
            setSurnameAlertMessage('');
        }
        if (!email) {
            setEmailAlertMessage('You need to enter a valid email!');
        } else {
            setEmailAlertMessage('');
            handleNextStep1();
            handleNextStep2();
            return true;
        };
        return false;
    }

    const handleButton2 = () => {
        const regex = /[0-9]/;

        if (!telephone || !regex.test(telephone) || telephone.length < 11) {
            setTelephoneAlertMessage('Invalid phone number!');
        } else {
            setTelephoneAlertMessage('');
        }

        if (!gender) {
            setGenderAlertMessage('You need to choose a gender')
        } else {
            setGenderAlertMessage('');
        }

        if (!day || !regex.test(day) || (day.length < 2 || day.length > 2)) {
            setDayAlertMessage('You need to enter a valid day!')
        } else {
            setDayAlertMessage('');
        }
        if (!month || !regex.test(month) || (month.length < 2 || month.length > 2)) {
            setMonthAlertMessage('You need to enter a valid month!')
        } else {
            setMonthAlertMessage('');
        }

        if (!year || !regex.test(year) || (year.length < 4 || year.length > 4)) {
            setYearAlertMessage('You need to enter a valid year!')
        } else {
            setYearAlertMessage('');
            handleNextStep2();
            if (openAccordion3) {
                return true;
            }
            handleNextStep3();
            return true;
        };
        return false;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!comments) {
            return setCommentAlertMessage('You need to enter comment!');
        } else {
            setCommentAlertMessage('');
        }

        if (handleButton1() === false) {
            return handleNextStep1();

        }

        if (handleButton2() === false) {
            return handleNextStep2();

        }

        await api.post('/', data)

        history.push('/users');
    }

    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>
                <div className="accordion-container">
                    <div className="step" onClick={handleNextStep1}>
                        <h5>Step 1: Your details</h5>
                    </div>
                    <div className={openAccordion1 ? "accordion__inputs--container openAccoerdion" : "accordion__inputs--container"}>
                        <div className="accordion__input">
                            <label htmlFor="step-1">First Name</label>
                            <input
                                className="accordion__input-field"
                                type="text" id="step-1"

                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />
                            <p className="alert-message">{nameAlertMessage}</p>
                        </div>

                        <div className="accordion__input">
                            <label htmlFor="step-2">Surname</label>
                            <input
                                className="accordion__input-field"
                                type="text"
                                id="step-2"

                                value={surname}
                                onChange={e => setSurname(e.target.value)}
                            />
                            <p className="alert-message">{surnameAlertMessage}</p>
                        </div>

                        <div className="accordion__input">
                            <label htmlFor="step-3">Email Address:</label>
                            <input
                                className="accordion__input-field"
                                type="email" id="step-3"

                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <p className="alert-message">{emailAlertMessage}</p>
                        </div>
                        <Button type="button" onClick={handleButton1} content={"Next >"} />
                    </div>
                </div>

                <div className="accordion-container">
                    <div className="step" onClick={handleNextStep2}>
                        <h5>Step 2: More comments</h5>
                    </div>
                    <div className={openAccordion2 ? "accordion__inputs--container openAccoerdion" : "accordion__inputs--container"}>
                        <div className="accordion__input">
                            <label htmlFor="telephone">Telephone</label>
                            <input
                                className="accordion__input-field"
                                type="tel"
                                id="telephone"
                                placeholder="07777777777"
                                value={telephone}
                                onChange={e => setTelephone(e.target.value)}
                            />
                            <p className="alert-message">{telephoneAlertMessage}</p>
                        </div>

                        <div className="accordion__input">
                            <label htmlFor="gender">Gender</label>
                            <select
                                className="accordion__input-field"
                                name="gender"
                                id="gender"
                                onChange={handleSelectChange}
                                value={gender}
                            >
                                <option value="" disabled hidden>select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <p className="alert-message">{genderAlertMessage}</p>
                        </div>

                        <div className="accordion__input">
                            <label htmlFor="date of birth">Date of birth</label>
                            <div>
                                <input
                                    className="accordion__input-date"
                                    type="text"
                                    id="date of birth"
                                    placeholder="DD"
                                    value={day}
                                    onChange={e => setDay(e.target.value)}
                                />
                                <input
                                    className="accordion__input-date"
                                    type="text"
                                    id="step-3"
                                    placeholder="MM"
                                    value={month}
                                    onChange={e => setMonth(e.target.value)}
                                />
                                <input
                                    className="accordion__input-date"
                                    type="text"
                                    id="step-3"
                                    placeholder="YYYY"
                                    value={year}
                                    onChange={e => setYear(e.target.value)}
                                />
                                <p className="alert-message">{dayAlertMessage}</p>
                                <p className="alert-message">{monthAlertMessage}</p>
                                <p className="alert-message">{yearAlertMessage}</p>
                            </div>
                        </div>
                        <Button type="button" onClick={handleButton2} content={"Next >"} />
                    </div>
                </div>

                <div className="accordion-container">
                    <div className="step" onClick={handleNextStep3}>
                        <h5>Step 3: Final comments</h5>
                    </div>
                    <div className={openAccordion3 ? "accordion__inputs--container openAccoerdion" : "accordion__inputs--container"}>
                        <div className="accordion__input">
                            <label htmlFor="comments">Comments</label>
                            <textarea
                                id="comments"
                                name="comments"
                                rows="8"
                                cols="40"
                                maxLength="200"
                                value={comments}
                                onChange={e => setComments(e.target.value)}
                            />
                            <p className="alert-message">{commentAlertMessage}</p>
                        </div>
                        <Button style={{ marginTop: "90px" }} type="submit" content={"Next >"} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormFields;