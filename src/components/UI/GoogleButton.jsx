import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import axios from "axios";
import GitHubLogin from 'react-github-login';
function AuthPage() {
  const googleClientId = "738556405944-8r64d24tknguv41a2gunpaco1jt8f7k1.apps.googleusercontent.com"
  const githubClientId = "26fe1f792daba29c499e"

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:`${googleClientId}`,
        scope: 'email',
      });
    }
    gapi.load('client:auth2', start);
  }, []);




  const googleOnSuccess = async response => {
    await axios.post('http://localhost:5000/google-authentication', {
        token: response.accessToken
    },{
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    }).then(res=> console.log(res.data))
    console.log('===>response', response)
  };


  const githubOnSuccess = async response => {
    await axios.post('http://localhost:5000/github-authentication', response,{
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    }).then(res=> console.log(res.data))
    console.log('===>response', response)
  };


  const onFailure = error => {
    console.log('FAILED ==>', error);
  };
  const onLogoutSuccess = () => {
    console.log('SUCESS LOG OUT');
  };


  return (
    <div>
      <GoogleLogin
        clientId = { googleClientId }
        onSuccess = { googleOnSuccess }
        onFailure = { onFailure }
      />
      <GoogleLogout
        clientId = {googleClientId}
        onLogoutSuccess = { onLogoutSuccess }
      />

      <GitHubLogin
        clientId={githubClientId}
        redirectUri=""
        onSuccess={githubOnSuccess}
        onFailure={onFailure}/>

    </div>
  );

}

export default AuthPage;