import React from 'react';
import { useEffect, useState } from 'react';
import './beg_style.css';
import Nav from './Nav';

function Top(){
    const [fifa, setFifa] = useState([]);
    const [war, setWar] = useState([]);
    const [forza, setForza] = useState([]);

    const fifa_ = async () =>{
        let juego = 'Fifa';
        let query = {juego};
        let dataRequest = {
            method: 'POST',
            body: JSON.stringify(query),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let url = new URL("http://localhost:10013/datos");
        let response = await fetch(url, dataRequest);
        let result = await response.json();
        setFifa(result);
    }

    const war_ = async () =>{
        let juego = 'Warzone';
        let query = {juego};
        let dataRequest = {
            method: 'POST',
            body: JSON.stringify(query),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let url = new URL("http://localhost:10013/datos");
        let response = await fetch(url, dataRequest);
        let result = await response.json();
        setWar(result);
    }

    const forza_ = async () =>{
        let juego = 'Forza';
        let query = {juego};
        let dataRequest = {
            method: 'POST',
            body: JSON.stringify(query),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let url = new URL("http://localhost:10013/datos");
        let response = await fetch(url, dataRequest);
        let result = await response.json();
        setForza(result);
    }

    useEffect(() => {
        fifa_();
        war_();
        forza_();
    });
    
    return(<>
        <div className='wrapper_beg'>
            <Nav />
            <div className='main_content_beg'>
                <div className="header">
                    <h1>TOP GAMES</h1>
                </div>
                <br/>
                <br/>
                <br/>
                <h1>FIFA</h1>
                <div className="table-wrapper">
                    <table className="fl-table">
                        <thead>
                        <tr>
                            <th>User</th>
                            <th>Average Goals</th>
                            <th>Pass Accuracy</th>
                            <th>Time played</th>
                            <th>Win/loss rate</th>
                        </tr>
                        </thead>
                        <tbody>
                            {fifa.map((val, key) => {
                                return(
                                    <tr key={key}>
                                        <td>{val.user}</td>
                                        <td>{val.average_goals}</td>
                                        <td>{val.pass}</td>
                                        <td>{val.played}</td>
                                        <td>{val.rate}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <br/>
                <h1>FORZA 5</h1>
                <div className="table-wrapper">
                    <table className="fl-table">
                        <thead>
                        <tr>
                            <th>User</th>
                            <th>First positions</th>
                            <th>Average speed race</th>
                            <th>Average speed world</th>
                            <th>Win/loss rate</th>
                        </tr>
                        </thead>
                        <tbody>
                            {forza.map((val, key) => {
                                return(
                                    <tr key={key}>
                                        <td>{val.user}</td>
                                        <td>{val.first}</td>
                                        <td>{val.average_speed}</td>
                                        <td>{val.average_2}</td>
                                        <td>{val.rate}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <br/>
                <h1>WARZONE</h1>
                <div className="table-wrapper">
                    <table className="fl-table">
                        <thead>
                        <tr>
                            <th>User</th>
                            <th>Kills per game</th>
                            <th>Aim</th>
                            <th>Level</th>
                            <th>Win/loss rate</th>
                        </tr>
                        </thead>
                        <tbody>
                            {war.map((val, key) => {
                                return(
                                    <tr key={key}>
                                        <td>{val.user}</td>
                                        <td>{val.kills}</td>
                                        <td>{val.aim}</td>
                                        <td>{val.level}</td>
                                        <td>{val.rate}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
    );
}

export default Top;