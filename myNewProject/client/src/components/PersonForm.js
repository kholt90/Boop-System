import React, { useState } from 'react'
import axios from 'axios';

export default () => {
    //keep track of what is being typed via useState hook
    const [characterName, setCharacterName] = useState(""); 
    const [strength, setStrength] = useState("");
    const [dexterity, setDexterity] = useState("");
    const [constitution, setConstitution] = useState("");
    const [intelligence, setIntelligence] = useState("");
    const [wisdom, setWisdom] = useState("");
    const [charisma, setCharisma] = useState("");
    
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            characterName,
            strength,
            dexterity,
            intelligence,
            constitution,
            wisdom,
            charisma,
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Character Name</label><br/>
                <input type="text" onChange = {(e) => setCharacterName(e.target.value)}/>
            </p>
            <p>
                <label>Strength</label><br/>
                <input type="text" onChange = {(e) => setStrength(e.target.value)}/>
            </p>
            <p>
                <label>Dexterity</label><br/>
                <input type="text" onChange = {(e) => setDexterity(e.target.value)}/>
            </p>
            <p>
                <label>Constitution</label><br/>
                <input type="text" onChange = {(e) => setConstitution(e.target.value)}/>
            </p>
            <p>
                <label>Intelligence</label><br/>
                <input type="text" onChange = {(e) => setIntelligence(e.target.value)}/>
            </p>
            <p>
                <label>Widsom</label><br/>
                <input type="text" onChange = {(e) => setWisdom(e.target.value)}/>
            </p>
            <p>
                <label>Charisma</label><br/>
                <input type="text" onChange = {(e) => setCharisma(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}