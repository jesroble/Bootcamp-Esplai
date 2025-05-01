1. Selecciona todos los registros de una tabla:
* Consulta todas los datos de la tabla film.

Solución: SELECT * FROM film \G

2. Filtrado de datos:
* Encuentra todas las películas con una duración ( length ) mayor a 120 minutos.
* Busca clientes cuyo apellido sea "Smith" en la tabla customer.

Solución:   SELECT * FROM film WHERE length > 120 \G
            SELECT * FROM customer WHERE last_name = 'Smith' \G

3. Ordenar datos:
* Ordena las películas de film alfabéticamente por el título.
* Ordena las películas por duración de mayor a menor.

Solución:   SELECT * FROM film ORDER BY title \G
            SELECT * FROM film ORDER BY length DESC \G

4. Usar funciones agregadas:
* Cuenta cuántos actores hay en la tabla actor .
* Encuentra la duración promedio de las películas en la tabla film .

Solución:   SELECT COUNT(*) FROM actor;
            SELECT AVG(length) AS avg_len FROM film;

5. Filtrar con operadores:
* Encuentra todas las películas con una clasificación ( rating ) de 'PG' o 'R'.
* Muestra los clientes con last_name que terminen en "FORD".

Solución:   SELECT * FROM film WHERE rating = 'PG' OR rating = 'R' \G
            SELECT * FROM customer WHERE last_name LIKE '%FORD' \G


                -------INTERMEDIO-------

6. JOIN simple:
* Muestra el nombre completo de los actores y los títulos de las películas
en las que han actuado (usa las tablas actor , film_actor y film ).

Solución:   SELECT first_name, last_name, title 
            FROM actor 
            JOIN film_actor ON film_actor.actor_id = actor.actor_id 
            JOIN film ON film_actor.film_id = film.film_id \G

7. Filtrar con JOIN:
* Encuentra los títulos de películas alquiladas por el cliente con el nombre
"MARY SMITH".

Solución:   SELECT title
            FROM film
            JOIN inventory ON film.film_id = inventory.film_id
            JOIN rental ON inventory.inventory_id = rental.inventory_id
            JOIN customer ON rental.customer_id = customer.customer_id
            WHERE customer.first_name = 'MARY' AND customer.last_name = 'SMITH' \G

8. Subconsultas:
* Encuentra los clientes que hayan alquilado más de 20 películas.

Solución:   SELECT first_name, last_name, COUNT(*) AS total_rentals
            FROM customer
            JOIN rental ON rental.customer_id = customer.customer.id
            GROUP BY customer.customer_id
            HAVING COUNT(*) > 20 \G

9. Agrupación y agregación:
* Muestra la cantidad total de alquileres ( rental_id ) por cliente ( customer_id ).
* Calcula el total de ingresos generados por cada película.

Solución1:  SELECT first_name, last_name, COUNT(*) AS total_rentals 
            FROM customer 
            JOIN rental ON rental.customer_id = customer.customer_id 
            GROUP BY customer.customer_id \G

Solución2:  SELECT title, SUM(payment.amount) AS total_amount
            FROM film
            JOIN inventory ON inventory.film_id = film.film_id
            JOIN rental ON rental.inventory_id = inventory.inventory_id
            JOIN payment ON payment.rental_id = rental.rental_id
            GORUP BY film.title
            GROUP BY total_amount \G


10. Consultas con múltiples JOIN:
* Muestra los nombres de las películas y las fechas de alquiler para un
cliente específico (combina film , rental e inventory).

Solución:   SELECT film.title, rental.rental_date
            FROM film
            JOIN inventory ON film.film_id = inventory.film_id
            JOIN rental ON inventory.inventory_id = rental.inventory_id
            JOIN customer ON rental.customer_id = customer.customer_id
            WHERE customer.first_name = 'NOMBRE_DEL_CLIENTE' AND customer.last_name 'APELLIDO_DEL_CLIENTE' \G

                                --------EXPERTO--------

16. Análisis de tendencias:
Encuentra el mes con la mayor cantidad de ingresos por alquiler.

Solución:   SELECT DATE_FORMAT(payment_date, '%m') AS month, SUM(amount) AS total_amount 
            FROM payment 
            GROUP BY month 
            ORDER BY total_amount DESC 
            LIMIT 1 \G

17. Optimización de subconsultas:
Reescribe una subconsulta que encuentre los actores más frecuentes
para que use un JOIN en lugar de una subconsulta.

Solución:   SELECT first_name, last_name, COUNT(*) AS frecuency
            FROM actor
            JOIN film_actor ON film_actor.actor_id = actor.actor_id
            JOIN film ON film.film_id = film_actor.film_id
            GROUP BY actor.actor_id, first_name, last_name
            ORDER BY frecuency DESC
            LIMIT 5 \G

18. Crear vistas:
Crea una vista que muestre los ingresos totales por cada cliente.


19. Usar índices:
Asegúrate de que las consultas para encontrar películas por duración
sean rápidas creando índices en las columnas relevantes.


20. Procedimientos almacenados:
Crea un procedimiento almacenado que reciba un rango de fechas y
devuelva los alquileres realizados en ese período.