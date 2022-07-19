import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import axios from "axios";
function AuthPage() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:"738556405944-8r64d24tknguv41a2gunpaco1jt8f7k1.apps.googleusercontent.com",
        scope: 'email',
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  const onSuccess = async response => {
    await axios.post('http://localhost:5000/authentication', {
        token: response.accessToken
    },{
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    }).then(res=> console.log(res.data))
  };


  const onFailure = response => {
    console.log('FAILED', response);
  };
  const onLogoutSuccess = () => {
    console.log('SUCESS LOG OUT');
  };

  return (
    <div>
      <GoogleLogin
        clientId={"738556405944-8r64d24tknguv41a2gunpaco1jt8f7k1.apps.googleusercontent.com"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      <GoogleLogout
        clientId={"738556405944-8r64d24tknguv41a2gunpaco1jt8f7k1.apps.googleusercontent.com"}

        onLogoutSuccess={onLogoutSuccess}

      />
    </div>
  );

}

export default AuthPage;