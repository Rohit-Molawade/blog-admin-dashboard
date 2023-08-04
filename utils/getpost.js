export async function publishedPost(publish) {
  const data = await fetch(
    `http://localhost:3001/api/posts?publish=${publish}`,
    {
      method: "GET",
      cache: 'no-store'
    }
  );

  return await data.json();
}
