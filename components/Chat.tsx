type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  console.log(chatId);
  return <div className="flex-1">Chat</div>;
}

export default Chat;
