## Geolocalización utilizando  Leaflet

Bienvenido a una práctica de geolocalización utilizando la librería de  Leaflet, la cual es una librería JavaScript open source ampliamente utilizada para la publicación de mapas en la web.

En esta práctica se realizará un cargado de un mapa, se tendrá un buscador donde se tendrá que agregar un estado de la república, y si es que si está registrado, trazara una ruta óptima para llegar a un destino específico.

### Archivos
En la carpeta de ejemplos es donde va a subir la magia por llamarlo de alguna forma, tendremos 3 archivos principales, index.js, index.css e index.html.
Cada uno de estos archivos contendrá información específica y útil para mostrar la información, en este caso un mapa y trazar las rutas específicas.

### Index.html

En este archivo vamos a encontrar la estructura de la página donde se mostrará la información, es importante recalcar que se estará utilizando bootstrap para manejar un poco el diseño y la librería  Leaflet para el tema de los mapas.

### Index.js

En este archivo es donde cargamos nuestro mapa, lo primero que se hace es definir una ubicación inicial para poder mostrar una gran cantidad de territorio y a un zum adecuado.

Para manejar los estados o lugares de donde queremos que se trace la ruta lo que se hace es meter la localización y nombre en un JSON, en la estructura definimos una ubicación central del estado, posterior a ellos dos ubicaciones dentro del estado y algunas cosas adicionales como el nombre del estado, en esta parte podemos agregar más cosas si es que así se requiere.
Si se quieren añadir más ubicaciones, solo basta con agregar más ubicaciones en el JSON.

Por último, todo el contenido se carga en un el archivo HTML.
