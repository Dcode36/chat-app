import { ChatEngine } from "react-chat-engine";
import LoginForm from './components/LoginForm'
import  ChatFeed from "./components/ChatFeed";
import './App.css'

const App = () => {
    if(!localStorage.getItem('username')) return<LoginForm/>
    return (
        <ChatEngine
            height="100vh"
            projectID="9bc1623b-5d7d-4d3b-b805-2414631c2381"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=>
            <ChatFeed {...chatAppProps}/>}



        />
    )
}


export default App;