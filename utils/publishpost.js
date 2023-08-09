export default async function publish_post(postId, token, publish) {
  let url = "";
  if (publish) url = `http://localhost:3001/api/posts/${postId}/unpublish`;
  else url = `http://localhost:3001/api/posts/${postId}/publish`;

  try {
    await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
}
