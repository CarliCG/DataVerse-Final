// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones. FILTRO ORDENAMIENTO 


export const filterData = (data, filterBy, value) => {
    function filtrado(data) {
      if (filterBy === "temporality") {
        if (value === "actual") {
          return data.facts["temporality"] >= 2010 && data.facts["temporality"] <= 2023;
        } else if (value === "anterior") {
          return data.facts["temporality"] < 2010 && data.facts["temporality"] >= 1940;
        } else {
          return data;
        }
      }
      return data[filterBy] === value || data.facts[filterBy] === value;
    }
    return data.filter(filtrado); //filter() requiere una funcion que returne true para revisar el array bajo esa condicion
  };
  
  export const sortData = (data, sortBy, sortOrder) => {
    if (sortBy === "name") {
      const sortedData = [...data]; // Crea una copia del array original
      if (sortOrder === "asc") {
        // Ordena de la A a la Z basándose en el nombre de la película
        return sortedData.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOrder === "desc") {
        // Ordena de la Z a la A basándose en el nombre de la película
        return sortedData.sort((a, b) => b.name.localeCompare(a.name));
      }
      return sortedData;
    }
    return data;
  };
  
  export const budgetStatics = (data) => {
    //Cantidad de películas
    const numMovies = data.length; // total de peliculas
    //Promedio de presupuesto
    const dataBudget = data.map(element => parseInt(element.facts.budget)); //map() para transformar un array existente llamado data en un nuevo array que contiene los valores numéricos de la propiedad "budget"
    const sumBudget = (dataBudget.reduce((sum, element) => sum + element, 0));
    const promBudget = numMovies > 0 ? sumBudget / numMovies : 0;
    const budgetMovies = Math.round(promBudget * 10) / 10;
    return {budgetMovies, numMovies };
  };