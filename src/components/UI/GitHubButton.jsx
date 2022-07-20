import React from 'react';
import axios from "axios";



const GitHubLogin =  ({clientId, onSuccess, onFailure}) => {

 const handlerClick = async () => {
   window.open(`https://github.com/login/oauth/authorize?client_id=${clientId}`, "Auth", "width=200,height=200");
   // axios.get(`https://github.com/login/oauth/authorize?client_id=${clientId}`)
   //   .then( res => onSuccess(res))
   //   .catch( e => onFailure(e))
 }

  return (
    <button onClick={handlerClick}>
      Sign in GitHub
    </button>
  )
};

export default GitHubLogin;