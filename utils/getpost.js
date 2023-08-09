export async function publishedPost(publish) {
  //GET request to API to fetch posts based on publish status
  try {
    const data = await fetch(
      `http://localhost:3001/api/posts?publish=${publish}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const res = await data.json();
    return res;
  } catch (error) {
    return error;
  }
}

export async function post(postId) {
  //GET request to API to fetch post
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
