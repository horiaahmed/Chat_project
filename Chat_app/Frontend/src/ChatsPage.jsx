import {MultiChatWindow,MultiChatSocket,useMultiChatLogic} from 'react-chat-engine-advanced';
  

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        "3cd17a75-fc2e-475a-9bdd-dffa33ce3cb1",props.user.username,props.user.secret
      );
  return (
    <div style={{'height':"100vh"}}>


      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} style={{'height':"100%"}}/>
    </div>
  );
};

export default ChatsPage;