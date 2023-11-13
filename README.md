## Índice

* [1. Descripción del proyecto](#descripción-del-proyecto)

Diseñado con la intención de servir a aquellos usuarios que buscan información diversa sobre películas. Este proyecto se muestra útil tanto en el contexto del entretenimiento, dirigido a usuarios que disfrutan explorando detalles cinematográficos, como en el ámbito académico, donde estudiantes pueden recopilar información sobre el arte del cine.

Se crearon distintas historias de ususario para entender sus necesidades de acuerdo a la informacion de peliculas

https://user-images.githubusercontent.com/141061178/282486345-3a12c00c-4065-4e40-82e9-328f1f2eff3f.png

Tambien se respondió a las siguientes interrogantes en la cual se baso el proyecto

https://github.com/CarliCG/DataVerse-Final/assets/141061178/69776d18-d4a5-454f-8ef2-671b2ad38ef9

Se utilizó ChatGPT para la creacion de los microdatos de las 24 peliculas.
https://github.com/CarliCG/DataVerse-Final/assets/141061178/5bed5980-300d-4296-9f0b-34542fe38212

### Funcionalidades del proyecto
- `filterData(data, filterBy, value)`: esta función recibe tres parámetros. El primer parámetro, data, entrega los datos. El segundo parámetro, filterBy, indica con respecto a cuál de los campos de la data se quiere filtrar. El tercer parámetro, value, indica el valor de campo que se desea filtrar.
- `sortData(data, sortBy, sortOrder)`: esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, entrega los datos. El segundo parámetro, sortBy, indica con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, refiere si se desea ordenar de manera ascendente o descendente.
- `computeStats(data)`: la función compute o calcular, realiza dos cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada, esta función incluye la cantidad de películas visualizadas y el cálculo del promedio del porcentaje de aceptación según la crítica de las películas visualizadas.
- `test/dataFunctions.spec.js`: En este archivo se crearon las pruebas unitarias de las funciones implementadas en el archivo dataFunctions.js (filterBy, sortBy, computeStats).
-  `renderItems(data)`: esta función recibe el arreglo de data para renderizar los elementos de cada item según las características requeridas.

### Herramientas utilizadas
* ChatGPT
* Figma
* Trello
* HTML
* CSS
* JavaScript

## Autora

https://github.com/CarliCG
