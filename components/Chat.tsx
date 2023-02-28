type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  console.log(chatId);
  return <div>Chat</div>;
}

export default Chat;
