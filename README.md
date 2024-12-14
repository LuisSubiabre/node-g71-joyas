## Instrucciones:
### Clonar repositorio:
```git clone git@github.com:LuisSubiabre/node-g71-joyas.git```

### Database PostgreSQL 17
1.- ```CREATE DATABASE joyas;```<br>
2.- ```\c joyas;```<br>
3.- ```CCREATE TABLE inventario (id SERIAL, nombre VARCHAR(50), categoria
VARCHAR(50), metal VARCHAR(50), precio INT, stock INT);```<br>
4.- ```INSERT INTO inventario values
(DEFAULT, 'Collar Heart', 'collar', 'oro', 20000 , 2),
(DEFAULT, 'Collar History', 'collar', 'plata', 15000 , 5),
(DEFAULT, 'Aros Berry', 'aros', 'oro', 12000 , 10),
(DEFAULT, 'Aros Hook Blue', 'aros', 'oro', 25000 , 4),
(DEFAULT, 'Anillo Wish', 'aros', 'plata', 30000 , 4),
(DEFAULT, 'Anillo Cuarzo Greece', 'anillo', 'oro', 40000 , 2);```<br>

## Backend
1.-```cd node-g71-joyas```<br>
2.-```npm install```<br>
3.-```renombrar .env.example -> .env```<br>
4.-```configurar variables de entorno .env```<br>
5.-```npm run dev```<br>

## URL ejemplos:
1.- ```http://localhost:3000/joyas```<br>
2.- ```http://localhost:3000/joyas/filtros?precio_max=30000&precio_min=1500```<br>
3.- ```http://localhost:3000/joyas/filtros?precio_max=30000&precio_min=1500&metal=oro&categoria=aros```<br>
