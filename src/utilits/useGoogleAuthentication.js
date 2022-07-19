// import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
//
// function useGoogleAuthentication() {
//   const handleSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
//     if ('accessToken' in response) {
//       const accessToken = response.accessToken;
//       console.log(accessToken)
//       fetch(`http://localhost:3000/google-authentication`, {
//         method: 'POST',
//         body: JSON.stringify({
//           token: accessToken
//         }),
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       }).then(res => console.log('===>res', res))
//     }
//   }
//
//   return {
//     handleSuccess,
//   }
// }
//
// export default useGoogleAuthentication;