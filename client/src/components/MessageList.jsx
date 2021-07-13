import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_MESSAGES = gql`
  {
    messages {
      _id
      title
      content
      author
    }
  }
`;

const MessageList = () => {
  const { error, loading, data } = useQuery(GET_MESSAGES);
  if (error) return <p>Error</p>;
  if (loading) return <p>Loading Messages...</p>;

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {
          data.messages.map(({ _id, title, content, author }) => (
            <div key={_id} className="card-body">
              <h4>{title}</h4>
              <p>{content}</p>
              <p>{author}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default MessageList;
