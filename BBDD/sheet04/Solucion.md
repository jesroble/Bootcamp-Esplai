## Diagramas
![Diagrama ER](diagrama_ER.png)
![Diagrama Relacional](diagrama_relacional.png)


## Consultas
1. Obtener el listado de socios que están inscritos en una disciplina
específica.

```sql
SELECT socio.nombre 
FROM socio 
JOIN socio_disciplina ON socio_disciplina.nro_membresia = socio.nro_membresia 
JOIN disciplina ON disciplina.id = socio_disciplina.id_disciplina 
WHERE disciplina.nombre = 'Tenis';

2. Consultar todos los eventos futuros y sus participantes.

SELECT evento.nombre, socio.nombre 
FROM evento
JOIN participacion_evento ON participacion_evento.id_evento = evento.id
JOIN socio ON socio.nro_membresia = participacion_evento.nro_membresia
WHERE evento.fecha > CURRENT_DATE
ORDER BY evento.nombre;

3. Listar los pagos pendientes de cuotas de todos los socios.

SELECT cuota.id
FROM cuota
JOIN socio ON socio.nro_membresia = cuota.nro_membresia
WHERE estado = 'pendiente';

4. Obtener el historial de entrenadores asignados a cada disciplina.

SELECT entrenador.nombre, disciplina.nombre
FROM entrenador
JOIN entrenador_disciplina ON entrenador_disciplina.id_entrenador = entrenador.id
JOIN disciplina ON disciplina.id = entrenador_disciplina.id_disciplina
ORDER BY disciplina.nombre;

5. Mostrar el nombre del socio ganador de un evento específico (si
aplica).

SELECT socio.nombre, evento.nombre
FROM socio
JOIN participacion_evento ON participacion_evento.nro_membresia = socio.nro_membresia
JOIN evento ON evento.id = participacion_evento.id_evento
WHERE evento.nombre = 'Torneo de Fútbol Primavera' AND ganador = TRUE;
