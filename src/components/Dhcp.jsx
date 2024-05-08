import React, { useEffect, useState } from 'react'

const Dhcp = () => {
    let url = 'http://172.19.23.18:8080/jimc/';
    let username = 'noc_tvip';
    let password = 'noc123';

    const [dhcp, setDhcp] = useState([]);

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic'+ btoa(username + ':' + password)
            }
        })
           .then(res => res.json())
           .then(data => setDhcp(data))
           .catch(err => console.log(err))
    })
  return (
   <>
    
   </>
  )
}

export default Dhcp