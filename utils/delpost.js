export default async function delete_post(postId, token) {
    //POST request to API for deleting POST
  try {
    await fetch(`http://localhost:3001/api/posts/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
}
