// token: access_token

// Create new account 
// method: 'POST'
// url: '/register'
// body: {
//     "email": required
//     "mobile":
//     "password": required
//     "first_name":
//     "middle_name":
//     "last_name":
//     "suffix":
//     "nickname":
//     "photo":
//     "birthdate":
//     "sex":
//     "civil_status":
//     "region": required
//     "province": required
//     "city_municipality": required
//     "barangay": required
//     "address": required
//     "meta":{
//       "type": "customer"
//     }
// }

// Logout the user
// method: 'POST' 
// url: '/logout'

// Refresh the user token
// method: 'POST' 
// url: '/refresh-token'

// Retrieve Profile Details of the user
// method: 'GET'
// url: '/profile'

// Updates Profile Details of the User
// method: 'PUT'
// url: '/profile'
// body: {
//   "first_name": 
//   "middle_name": 
//   "last_name": 
//   "suffix": 
//   "nickname": 
//   "photo": 
//   "birthdate": 
//   "sex": 
//   "civil_status": 
//   "region": 
//   "province": 
//   "city_municipality":
//   "barangay": 
//   "address":
// }

// Updates Email of the user and send verification Email Link
// method: 'PUT'
// url: '/profile/email/link'
// body: {
//     "email": required
// }

// Verifies the code from email for email update
// method: 'POST'
// url: '/profile/email'
// body: {
//     "code": required
// }

// Updates Password of the authenticated user
// method: 'PUT'
// url: '/profile/password'
// body: {
//     "current_password": required
//     "new_password": required
// }

// Authenticate the user credentials / Login
// method: 'POST'
// url: '/login'
// body: {
//     "username": required (username || email)
//     "password": required
// }
// on SUCCESS ( code 200 ) returns:
// {
//     "code": 200,
//     "message": "Login successful",
//     "access_token",
//     "refresh_token",
//     "expiration",
//     "user_profile": {
//     "email": required
//     "mobile":
//     "password": required
//     "first_name":
//     "middle_name":
//     "last_name":
//     "suffix":
//     "nickname":
//     "photo":
//     "birthdate":
//     "sex":
//     "civil_status":
//     "region": required
//     "province": required
//     "city_municipality": required
//     "barangay": required
//     "address": required
//     "meta":{
//       "type": "customer"
//     }
//     "email_verified"
//     "mobile_verified"
// }

export const UserApi = ( method, url, token, body ) => {
    const baseUrl = 'https://api.concati.com/users';
    let myHeaders = new Headers();
    if ( method === 'POST' || method === 'PUT')
        myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", 'Bearer ' + token);
    // myHeaders.append("Access-Token", 'Bearer ' + token);
    
    let requestOptions = {
      method,
      headers: myHeaders,
      body: body ? JSON.stringify(body) : null,
      redirect: 'follow'
    };
    
    return fetch(baseUrl + url, requestOptions)
      .then(response => {
        // throw new Error('Bad Response');
        if (!response.ok) console.error(response);
        return response.json()
      })
      .then(result => { return result })
      .catch(error => console.error('error', error));
}

// export const AdminUserApi = ( method, url, token, body = {} ) => {

// }