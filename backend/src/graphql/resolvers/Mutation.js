import Message from "../../models/Message";

const Mutation = {
  async createMessage(_, { input }) {
    const message = await Message.create(input);
    return message;
  },
};

export default Mutation;
