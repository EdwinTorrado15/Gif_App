export const getGifts = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=30&api_key=R1mgLYonD2yijMFZroQmoQ7obb9R3Mwi`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gif = data.map((img) => {
      return {
        id: img.id,
        // title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    return gif;
  };