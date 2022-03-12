import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App= () => {
if(!localStorage.getItem('username')) return <LoginForm />;

    return (

        <ChatEngine
height="100vh"
projectID="311e3e02-839d-42bb-8944-e7b852052083"
userName={localStorage.getItem('username')}
userSecret={localStorage.getItem('password')}
renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps }/>}
onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}


        />
    );
};

export default App;