import IMessage from "../../models/Message";

function Message(props: IMessage) {
  return (
    <div className="messages">
      <div className="sender">
        {props.sender}:<span className="context">{props.context}</span>
      </div>
    </div>
  );
}
export default Message;
