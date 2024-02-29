
# Proyecto Backend

Proyecto de backend integrando varias tablas de una base de datos de mongo




## Pasos previos
- Instalación de Mongo 
- Instalación de Node


## Pasos front
- Creamos carpeta frontend y en la terminal del visual podemos ejecutar el siguiente comando, ponemos . porque ya hemos creado nuestra carpeta. Nos aseguramos de estar en nuestra carpeta con el comando cd front
```bash 
npm create-react-app .
``` 



## Pasos back
- creamos una carpeta para back y nos aseguramos de estar en la carpeta back y luego ejecutamos los siguiente comandos:
```bash 
npm init -y
npm install express

- verificamos la versión de node y nodemon, en caso de no tenerlo, lo podemos instalar visitando la documentación correspondiente.
node -v
nodemon -v 

- En el package.json añadimos después de main, así podemos importar las dependencias de los ficheros y evitar usar el require
"type": "module"

- Ahora podemos abrir mongod.exe lo ejecutamos directamente desde la terminal, teniendo en cuanta que abrimos la terminal desde dónde está el ejecutable. Una vez está inicado el ejecutable podemos abrir mongoDb compass en nuestro equipo y conectar la base de datos. En mi caso he creado una base de datos login con su colección tasks y users.

- Instalamos en nuestra terminal del proyecto en la carpeta back
npm i mongoose

- Creamos carpetas para los controladores, modelos, rutas y para la conexión de base de datos

- Para poder añadir una capa de seguridad a nuestro proyecto. Con esto conseguimos encryptar nuestra contraseña y con el token de poder dar acceso a las personas que tengan ese token, que se obtiene cuando te registrar y haces login. Instalamos:
npm install bcrypt
npm install jsonwebtoken

- Para añadir esa capa de seguridad, necesitamos crear un middelware, en nuestro caso lo utilzaremos para la autenticación y autorización a la hora de que puedan ver los datos. En nuestro caso creamos un middleware para el acceso a los datos y para el role.

- También Instalamos y creamos el archivo para poder evitar usar nuestros datos originales sino que los cambiamos por las rutas que definimos. Lo instalamos ya que node no lee la variable de entorno, por eso instalamos esta librería para que pueda leer las variables de entorno que necesitamos, para evitar exponer nuestros datos relevantes en nuestros archivos.

npm install dotenv 

``` 

## Test
- He creado pruebas con el plugin thunderclient y con postman para ver si las conexiones se ejecutan correctamente
- Usamos las rutas definidas en el proyecto.
- Intentaré poner pantallazo de lo que tiene que salir al ejecutar las rutas
## Anotaciones generales
- He usado exportaciones nombradas y default, dependiendo de las necesidades del proyecto. Con default llamaríamos a todas, mientras que las nombradas llama a esa en concreto
- Primero hice la tabla de tasks y luego la de users, ambas por separado, pero en este proyecto el reto era integrarlas todas, así que unifique los archivos, me pareció más cómodo hacerlo trayendo la información de login a lo que ya tenía hecho. 