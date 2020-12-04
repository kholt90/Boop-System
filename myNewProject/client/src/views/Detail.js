import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default props => {
    const [person, setPerson] = useState({})
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson(res.data))
    }, [])

    return (
        <div>
            <p>Name: {person.characterName}</p>
            <p>Strength: {person.strength}</p>
            <p>Strength: {person.dexterity}</p>
            <p>Strength: {person.constitution}</p>
            <p>Strength: {person.intelligence}</p>
            <p>Strength: {person.wisdom}</p>
            <p>Strength: {person.charisma}</p>
        </div>
    )
}