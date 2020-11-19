import React, { useState, useEffect } from 'react'
import footballArr from "../../containers/data/Footballers"

const Football = () => {
    let [ defenders, setDefenders ] = useState([])
    let [ attackers, setAttackers ] = useState([])
    let [ midfielders, setMidfielders ] = useState([])
    let [ goalie, setGoalie ] = useState([])
    
    //works!! 
    //now need to display players in their positions 
    //make a div and have the positions display horizontally, from there can just style the flex display of the text hopefully
    
    const handleClick = (player) => { 
        let position = player.position 

        if(position === "Defender" && defenders.length < 4 && defenders.includes(player.name) === false ){ 
            setDefenders(defenders.concat(player.name))
            console.log(defenders)

        } else if (position === "Attacker" && attackers.includes(player.name) === false ){ 
            setAttackers(attackers.concat(player.name))
            console.log(attackers)

        } else if (position === "Midfielder" && midfielders.length < 5 && midfielders.includes(player.name) === false){ 
            setMidfielders(midfielders.concat(player.name))
            console.log(midfielders)

        } else if (position === "Goalkeeper" && goalie.length < 1 && goalie.includes(player.name) === false ){
            setGoalie(goalie.concat(player.name))
            console.log(goalie)

        } else { 
            alert('invalid player')
        }
        
    }

    return (
        <div>
            <div>
                <div>
                    {defenders.map(defender => { 
                        return<p>{defender}</p>
                    })}
                </div>
                <div>
                    {attackers.map(attacker => { 
                        return<p>{attacker}</p>
                    })}
                </div>
                <div>
                    {midfielders.map(midfielder => { 
                        return<p>{midfielder}</p>
                    })}
                </div>
                <div>
                    {goalie.map(goalie => { 
                        return<p>{goalie}</p>
                    })}
                </div>
            </div>
            {footballArr.map((player) => { 
                return  <div>
                            <button onClick={() => handleClick(player)}>Add to team</button>
                            <p>{player.name}</p>
                            <p>{player.position}</p>
                        </div>
            })}
        </div>
    )
}

export default Football
