import React, { useEffect, useState } from 'react'
import Apiservice from './Apiservice'

const RandomFacts = () => {

    const [randomFacts, setRandomFacts] = useState('Random Useless Facts')
    const [reloadCount, setReloadCount] = useState(0);
    


    useEffect( () => {
        const intervalId = setInterval(() => {
            Apiservice().then(
                (response) => {            
                    setRandomFacts(response.data.text)
                }
            )
            setReloadCount(prevCount => prevCount + 1);
          }, 8000);
          return () => clearInterval(intervalId);
    }, [])  

    return(
        <React.Fragment>
            <div className='container'>
                <div className='content zoom-in-out-box'>
                    <h1>{randomFacts}</h1>
                </div>
            </div>
        </React.Fragment>
    )

}

export default RandomFacts