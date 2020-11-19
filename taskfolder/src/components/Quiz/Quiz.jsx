import React, { useState , useEffect } from 'react'
import styles from "./Quiz.module.scss"

const Quiz = () => {

    let [ isWrong, setIsWrong ] = useState(false)
    let [ isRight, setIsRight ] = useState(false)
    let [ disp, setDisp ] = useState("questionon")
    let [ userAns, setUserAns ] = useState("")
    const ans = "correctanswer"

    useEffect(() => { 
        if(isWrong === true){ 
            setDisp("Bad Luck!")
        } else if(isRight === true){ 
            setDisp("Congratulations!")
        } else { 
            return
        }
    }, [isWrong, isRight])



    const checkAnswer = (val, ans) => { 
        if (val === ans){ 
            setIsRight(true)
            console.log(isRight + " if run")
        } else { 
            setIsWrong(true)
            console.log(isWrong + " else run")
        }
    }

    const startCheck = () => { 
        checkAnswer(userAns, ans)
    }
    const reset = () => { 
        window.location.reload()
    }


    //plan: 
    //need a question display and a way for the user to answer it 
    //simplest way to do that is have a display containing the options and an input box for the user to select one
    //then check the value against the real answer
    //make an if statement, if wrong reset the page else congratulations

    //what logic is needed: 
    //a check for the input value on the submit push 
    //change in the question display when you get it right/wrong





    return (
        <div> 
            
            <div> 
                <h2>{disp}</h2>
                <p>answer</p>
                <p>answer</p>
                <p>answer</p>
            </div>
            <div> 
                <label>Type your answer here!</label>
                <input type="text" className={styles.ipt} onChange={e => setUserAns(e.target.value)}/>
                <button onClick={startCheck}>Submit</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Quiz
