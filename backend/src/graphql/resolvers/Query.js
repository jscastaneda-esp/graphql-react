import Message from "../../models/Message";

const Query = {
  ping() {
    return "pong";
  },
  async messages() {
    const messages = await Message.find();
    return messages;
  },
};

export default Query;
