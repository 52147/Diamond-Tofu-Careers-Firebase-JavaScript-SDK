import React from "react";

export const Item = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <tr key = {post.email}>
          <td>{post.email}</td>
          <td>{post.first_name}</td>
          <td>{post.last_name}</td>
          <td>{post.location}</td>
        </tr>
      ))}
    </>
  );
};
