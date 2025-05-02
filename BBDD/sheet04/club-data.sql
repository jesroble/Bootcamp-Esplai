SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE participacion_evento;
TRUNCATE TABLE entrenador_disciplina;
TRUNCATE TABLE socio_disciplina;
TRUNCATE TABLE cuota;
TRUNCATE TABLE evento;
TRUNCATE TABLE disciplina;
TRUNCATE TABLE entrenador;
TRUNCATE TABLE socio;

SET FOREIGN_KEY_CHECKS = 1;

-- Insertar disciplinas
INSERT INTO disciplina VALUES (1, 'Fútbol', 'Deporte de equipo con balón');
INSERT INTO disciplina VALUES (2, 'Natación', 'Deporte acuático individual');
INSERT INTO disciplina VALUES (3, 'Tenis', 'Deporte de raqueta');

-- Insertar socios
INSERT INTO socio VALUES (101, 'Juan Pérez', '1990-05-15', '555-1234', 'Calle 123', '2020-01-10');
INSERT INTO socio VALUES (102, 'María García', '1985-08-22', '555-5678', 'Avenida 456', '2020-02-15');
INSERT INTO socio VALUES (103, 'Carlos López', '1995-03-30', '555-9012', 'Boulevard 789', '2021-01-05');
INSERT INTO socio VALUES (104, 'Ana Martínez', '1988-11-12', '555-3456', 'Calle 321', '2021-03-20');
INSERT INTO socio VALUES (105, 'Luisa Fernández', '1992-07-25', '555-7890', 'Avenida 654', '2022-01-15');

-- Insertar entrenadores
INSERT INTO entrenador VALUES (201, 'Roberto Jiménez', 10, 'Lunes a Viernes 8am-12pm');
INSERT INTO entrenador VALUES (202, 'Sofía Ramírez', 8, 'Martes y Jueves 4pm-8pm');
INSERT INTO entrenador VALUES (203, 'Miguel Ángel Cruz', 5, 'Lunes, Miércoles, Viernes 3pm-7pm');

-- Asignar disciplinas a entrenadores
INSERT INTO entrenador_disciplina VALUES (201, 1); -- Roberto enseña Fútbol
INSERT INTO entrenador_disciplina VALUES (202, 2); -- Sofía enseña Natación
INSERT INTO entrenador_disciplina VALUES (203, 3); -- Miguel enseña Tenis
INSERT INTO entrenador_disciplina VALUES (203, 1); -- Miguel también enseña Fútbol

-- Asignar disciplinas a socios
INSERT INTO socio_disciplina VALUES (101, 1); -- Juan en Fútbol
INSERT INTO socio_disciplina VALUES (101, 3); -- Juan en Tenis
INSERT INTO socio_disciplina VALUES (102, 2); -- María en Natación
INSERT INTO socio_disciplina VALUES (103, 1); -- Carlos en Fútbol
INSERT INTO socio_disciplina VALUES (104, 3); -- Ana en Tenis
INSERT INTO socio_disciplina VALUES (105, 2); -- Luisa en Natación

-- Insertar eventos
INSERT INTO evento VALUES (301, 'Torneo de Fútbol Primavera', 'Torneo interno de fútbol', '2024-11-15', '10:00', 'Cancha Principal', 1, 201);
INSERT INTO evento VALUES (302, 'Competencia de Natación', '100m estilo libre', '2025-12-12', '15:00', 'Piscina Olímpica', 2, 202);

-- Participantes en eventos
INSERT INTO participacion_evento VALUES (101, 301, FALSE); -- Juan en Torneo Fútbol
INSERT INTO participacion_evento VALUES (103, 301, TRUE); -- Carlos en Torneo Fútbol (ganador)
INSERT INTO participacion_evento VALUES (102, 302, FALSE); -- María en Natación
INSERT INTO participacion_evento VALUES (105, 302, FALSE); -- Luisa en Natación

-- Cuotas
INSERT INTO cuota VALUES (401, 101, '2023-10-01', 50.00, 'pagado');
INSERT INTO cuota VALUES (402, 102, '2023-10-05', 50.00, 'pagado');
INSERT INTO cuota VALUES (403, 103, '2023-10-10', 50.00, 'vencido');
INSERT INTO cuota VALUES (404, 104, '2023-10-15', 50.00, 'pendiente');
INSERT INTO cuota VALUES (405, 105, '2023-10-20', 50.00, 'pagado');