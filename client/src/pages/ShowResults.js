import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import api from '../services/api';
import './show-results.css';
import { useHistory } from 'react-router-dom';

const ShowResults = () => {
    const [data, setData] = useState([]);

    let history = useHistory()

    useEffect(() => {
        api.get('/users').then(response => {
            setData(response.data);
        })
    }, []);

    const handleRedirect = () => {
        history.push('/');
    }

    return (
        <div className="card-container">
            <div className="card__container-header">
                <Button content={"< Back"} onClick={handleRedirect} />
            </div>
            <div className="container">
                {data.map((user, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="card__details">
                                <div className="card__header">
                                    <p>{user.firstName}</p>
                                </div>
                                <p><span>First name:</span> {user.firstName}</p>
                                <p><span>Surname: </span>{user.surname}</p>
                                <p><span>email:</span> {user.email}</p>
                                <p><span>Telephone:</span> {user.telephone}</p>
                                <p><span>Gender:</span> {user.gender}</p>
                                <p><span>Date of birth:</span>  {user.dateOfBirth}</p>
                                <p><span>Comments:</span> {user.comments}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ShowResults;
