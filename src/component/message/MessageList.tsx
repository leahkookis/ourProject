import axios from "axios";
import { ActionType } from "../../redux/action-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/app-state";
import Message from "./Message";
import { Link } from "react-router-dom";

function MessageList() {
  
    let token = useSelector((state:AppState)=> state.token);
    let messages = useSelector((state: AppState) => state.messages);
    let [pageNumber, setPageNumber] = useState(0);
    const dispatch = useDispatch();
    function onNextClicked() {
      pageNumber++;
      setPageNumber(pageNumber);
    }
  
    function onBackClicked() {
      pageNumber--;
      setPageNumber(pageNumber);
    }
    useEffect(() => {
      getAllMessages();
    }, []);
    async function getAllMessages() {
      try {
        let url = `http://localhost:8080/messages`;
        let response = await axios.get(url);
        let messageList = response.data;
        dispatch({
          type: ActionType.saveMessages,
          payload: { messageList },
        });
      } catch (e: any) {
        if (e.response?.data?.errorMessage) {
          alert(e.response.data.errorMessage);
        } else {
          alert("Something went wrong , Try again later");
        }
      }
    }

  
      let [context,setContext]=useState("");
      axios.defaults.headers.common["Authorization"] = token;

      async function updateMessageList() {
        try {
          await axios.post("http://localhost:8080/messages", { context });
          window.location.reload()
        } catch (e: any) {
          if (e.response?.data?.errorMessage) {
            alert(e.response.data.errorMessage);
          } else {
            alert("Something went wrong , Try again later");
          }
        }
    }
   
    return (
      
      <div className="message-list">
        <div className="wrapper">
      
          <div className="messages">
            {messages.map((message) => (
              <Message
                key={message.id}
                context={message.context}
                sender={message.sender} id={message.id} isRead={false}              />
            ))}
          </div>
         <input type="text" placeholder="type your message" onChange={(event)=>setContext(event.target.value)}/>
         <button onClick={updateMessageList}>Send</button>
        </div>
      </div>
    );
  }
  export default MessageList
    ;
  