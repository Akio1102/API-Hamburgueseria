# API-Hamburgueseria

API Hamburguesería

## Ejecutar Proyecto

Instala las dependencias del backend

```bash
npm i
```

Ejecutar el Servidor con el siguiente comando

```bash
npm run dev
```

## Lista de EndPoints

1. Encontrar todos los ingredientes con stock menor a 400. ✅

```bash
 GET http://localhost:4000/api/Ingredientes/Stock-400
```

2. Encontrar todas las hamburguesas de la categoría “Vegetariana” ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Vegetariana
```

3. Encontrar todos los chefs que se especializan en “Carnes” ✅

```bash
 GET http://localhost:4000/api/Chefs/Carnes
```

4. Aumentar en 1.5 el precio de todos los ingredientes ✅

```bash
 GET http://localhost:4000/api/Ingredientes/Price
```

5. Encontrar todas las hamburguesas preparadas por “ChefB” ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/ChefB
```

6. Encontrar el nombre y la descripción de todas las categorías ✅

```bash
 GET http://localhost:4000/api/Categorias
```

7. Eliminar todos los ingredientes que tengan un stock de 0 ✅

```bash
 GET http://localhost:4000/api/Ingredientes/Stock-0
```

8. Agregar un nuevo ingrediente a la hamburguesa “Clásica” ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/New-Ingrediente
```

9. Encontrar todas las hamburguesas que contienen “Pan integral” como ingrediente ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Pan-Integral
```

10. Cambiar la especialidad del “ChefC” a “Cocina Internacional” ✅

```bash
 GET http://localhost:4000/api/Chefs/ChefC
```

11. Encontrar el ingrediente más caro ✅

```bash
 GET http://localhost:4000/api/Ingredientes/Caro
```

12. Encontrar las hamburguesas que no contienen “Queso cheddar” como ingrediente ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Sin-Cheddar
```

13. Incrementar el stock de “Pan” en 100 unidades ✅

```bash
 GET http://localhost:4000/api/Ingredientes/Stock-100
```

14. Encontrar todos los ingredientes que tienen una descripción que contiene la palabra “clásico” ✅

```bash
 GET http://localhost:4000/api/Ingredientes/Clasico
```

15. Listar las hamburguesas cuyo precio es menor o igual a $9 ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Precio-Menor
```

16. Contar cuántos chefs hay en la base de datos ✅

```bash
 GET http://localhost:4000/api/Chefs/Count
```

17. Encontrar todas las categorías que contienen la palabra “gourmet” en su descripción ✅

```bash
 GET http://localhost:4000/api/Categorias/Gourmet
```

18. Eliminar las hamburguesas que contienen menos de 5 ingredientes ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Ingredientes5
```

19. Agregar un nuevo chef a la colección con una especialidad en “Cocina Asiática” ✅

```bash
 GET http://localhost:4000/api/Chefs/CreateChef
```

20. Listar las hamburguesas en orden ascendente según su precio ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Precio-Asc
```

21. Encontrar todos los ingredientes cuyo precio sea entre $2 y $5 ✅

```bash
 GET http://localhost:4000/api/Ingredientes/Precio-2-5
```

22. Actualizar la descripción del “Pan” a “Pan fresco y crujiente” ✅

```bash
 GET http://localhost:4000/api/Ingredientes/UpdatePan
```

23. Encontrar todas las hamburguesas que contienen “Tomate” o “Lechuga” como ingredientes ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Tomate-Lechuga
```

24. Listar todos los chefs excepto “ChefA” ✅

```bash
 GET http://localhost:4000/api/Chefs/ChefsA
```

25. Incrementar en $2 el precio de todas las hamburguesas de la categoría “Gourmet” ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Precio-Gourmet
```

26. Listar todos los ingredientes en orden alfabético ✅

```bash
 GET http://localhost:4000/api/Ingredientes/Asc
```

27. Encontrar la hamburguesa más cara ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Cara
```

28. Agregar “Pepinillos” a todas las hamburguesas de la categoría “Clásica” ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Clasica
```

29. Eliminar todos los chefs que tienen una especialidad en “Cocina Vegetariana” ✅

```bash
 GET http://localhost:4000/api/Chefs/Chef-Vegano
```

30. Encontrar todas las hamburguesas que contienen exactamente 7 ingredientes ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Ingredientes7
```

31. Encontrar la hamburguesa más cara que fue preparada por un chef especializado en “Gourmet” ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Cara-Gourmet
```

32. Listar todos los ingredientes junto con el número de hamburguesas que los contienen ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Ingredientes
```

33. Listar los chefs junto con el número de hamburguesas que han preparado ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Total
```

34. Encuentra la categoría con la mayor cantidad de hamburguesas ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Categoria-Cantidad
```

35. Listar todos los chefs y el costo total de ingredientes de todas las hamburguesas que han preparado ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Costo-Total
```

36. Encontrar todos los ingredientes que no están en ninguna hamburguesa ✅

```bash
 GET http://localhost:4000/api/Ingredientes/No-Hambusquesas
```

37. Listar todas las hamburguesas con su descripción de categoría ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Descripcion-Categoria
```

38. Encuentra el chef que ha preparado hamburguesas con el mayor número de ingredientes en total ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Max
```

39. Encontrar el precio promedio de las hamburguesas en cada categoría ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Precio-Promedio
```

40. Listar los chefs y la hamburguesa más cara que han preparado ✅

```bash
 GET http://localhost:4000/api/Hamburguesa/Chefs-Cara
```
