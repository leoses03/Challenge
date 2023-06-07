async function searchArticles(term) {
    try {
      const response = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${term}`);
      const articles = response.data.query.search;
      // Aquí puedes manipular los datos de los artículos obtenidos y actualizar la interfaz de usuario
    } catch (error) {
      console.error(error);
    }
  }  