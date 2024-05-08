import React, { useEffect, useState } from 'react'
import './Titans.css';
const Titan123 = () => {
    let url = 'http://172.19.14.123/api/v1';
    let username = 'Operator';
    let password = 'titan';
  
    const [channel, setChannel] = useState([]);
    const [titan, setTitan] = useState([]);
  
  
  
    let headers = new Headers();
  
    //headers.append('Content-Type', 'text/json');
    headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
  
    useEffect(() => {
  
      fetch(`${url}/servicesmngt/services`, {
        method: 'GET',
        headers: headers,
        //credentials: 'user:passwd'
      })
        .then(response => response.json())
        .then(data => setChannel(data))
        .catch(err => console.log(err))
  
    }, [])
  
    useEffect(() => {
  
      fetch(`${url}/system/information/version`, {
        method: 'GET',
        headers: headers,
        //credentials: 'user:passwd'
      })
        .then(res => res.json())      
        .then(infoTitan => setTitan(infoTitan))
        .catch(err => console.log(err))
    }, [])
  
    //.done();
  
    return (
      <div className="App">
        {
          
          channel.map((item) => {
  
            const input = item.Input[0].IPInputList[0];
            const output = item.Outputs[0][0].Outputs[0]
            return (
              <div className='titans'>
              <h3>Titan: {titan.customname}</h3>
                <h3 key={item.UID}>{item.Name}</h3>
                
                <p>Multicast de entrada: {input.Url}</p>
                <p>Source: {input.Source}</p>
                
                <p>{output.Interface}</p>
                <p>Multicast de salida: {output.Url}</p>
  
              </div>
  
  
            )
          }
          )}
  
      </div>
    );
}

export default Titan123