export async function publishedPost(publish) {
  try {
    const data = await fetch(
      `http://localhost:3001/api/posts?publish=${publish}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    return await data.json();
  } catch (error) {
    return error;
  }
}

export async function post(postId) {
  try {
    const data = await fetch(`http://localhost:3001/api/posts/${postId}`, {
      method: "GET",
      cache: "no-store",
    });

    return await data.json();
  } catch (error) {
    return error;
  }
}
