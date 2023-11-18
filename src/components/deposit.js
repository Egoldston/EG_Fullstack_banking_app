import React, { useState, useContext } from 'react';
import { UserContext, CustomCard as Card } from './context';


const Deposit = () => {
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="warning"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function DepositMsg(props){
  return (<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
          props.setShow(true);
          props.setStatus('');
      }}>
        Deposit again
    </button>
  </>);
} 

function DepositForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');

  function handle(){

    // firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    //   // Send token to your backend via HTTPS

    //   fetch(`/account/update/${email}/${amount}`, { 
    //     method: 'post', 
    //     headers: new Headers({
    //         'Authorization': 'token '+idToken, 
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     })
    //   })
    //   .then(response => response.text())
    //   .then(text => {
    //       try {
    //           const data = JSON.parse(text);
    //           props.setStatus(`Balance: $ ${data.value["balance"]}`);
    //           props.setShow(false);
    //           console.log('JSON:', data);
    //       } catch(err) {
    //           props.setStatus('Deposit failed')
    //           console.log('err:', text);
    //       }
    //   });

    // }).catch(function(error) {
    //   // Handle error
    // });
    


  }

  return(<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
      
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Deposit</button>

  </>);
}

export default Deposit;