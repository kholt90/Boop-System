import React from 'react'
import axios from 'axios';
import {Link} from '@reach/router';

export default props => {
    return (
        <div>
            {props.people.map((person, idx)=>{
                return <p key={idx}>
                    <Link to={person._id}>
                        {person.characterName}
                    </Link>
                </p>
            })}
        </div>
    )
}