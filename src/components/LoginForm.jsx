import {useState} from 'react';
import axios from 'axios';
const LoginForm =() =>{

    const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
const [error, setError] = useState('');
     const handleSubmit =async (e) =>{
e.preventDefault();

const authObject={'Project-ID':"311e3e02-839d-42bb-8944-e7b852052083", 'User-Name': username, 'User-Secret': password};

try{
await axios.get('https://api.chatengine.io/chats', {headers:authObject});

localStorage.setItem('username', username);
localStorage.setItem('password', password);

window.location.reload();
setError('');
}catch(error){
setError('Oops ! Incorrect Credentials !');
}
     };
return (
<div className="wrapper">
<div className="form">
    <h1 className="title">Let's Chat</h1>
    <form onSubmit ={handleSubmit}>
<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
<input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
<div align="center">

<button type="submit" className="button">
    <span>Start Chatting</span>
</button>
</div>
</form>
<h2 className="error">{error}</h2>
    


</div>
</div>


);

};
export default LoginForm;