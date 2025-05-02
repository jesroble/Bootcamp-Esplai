CREATE TABLE socio(
    nro_membresia INT PRIMARY KEY,
    nombre VARCHAR(100),
    fecha_nacimiento DATE,
    telefono VARCHAR(20),
    direccion VARCHAR(50),
    fecha_inscripcion DATE
);

CREATE TABLE entrenador(
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    especialidad VARCHAR(100),
    años_exp INT,
    horario VARCHAR(50)
);

CREATE TABLE disciplina (
    id_disciplina INT PRIMARY KEY,
    nombre VARCHAR(50),
    descripcion VARCHAR(200)
);

CREATE TABLE eventos(
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion VARCHAR(200),
    fecha DATE,
    hora TIME,
    lugar VARCHAR(100),
    id_disciplina INT,
    id_entrenador_responsable INT,
    FOREIGN KEY (id_disciplina) REFERENCES disciplina(id),
    FOREIGN KEY (id_entrenador_responsable) REFERENCES entrenador(id)
);

CREATE TABLE cuota(
    id INT PRIMARY KEY,
    nro_membresia INT,
    fecha DATE,
    monto DECIMAL,
    estado VARCHAR(20) CHECK (estado IN ('pagado', 'pendiente', 'vencido')),
    FOREIGN KEY (nro_membresia) REFERENCES socio (nro_membresia)
);

CREATE TABLE socio_disciplina(
    nro_membresia INT,
    id_disciplina INT,
    PRIMARY KEY (nro_membresia, id_disciplina),
    FOREIGN KEY nro_membresia REFERENCES socio(nro_membresia),
    FOREIGN KEY id_disciplina REFERENCES disciplina(id)
);

CREATE TABLE entrenador_disciplina(
    id_disciplina INT,
    id_entrenador INT,
    PRIMARY KEY (id_disciplina, id_entrenador),
    FOREIGN KEY (id_disciplina) REFERENCES disciplina(id),
    FOREIGN KEY (id_entrenador) REFERENCES entrenador(id)
);

