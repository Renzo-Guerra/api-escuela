-- Whatever name you desire (it must match with your PGDATABASE in .env file)
CREATE DATABASE SISTEMA_COLEGIO;

CREATE TABLE MATERIA(
	id_materia SERIAL,
	nombre VARCHAR(40) NOT NULL,
	CONSTRAINT PK_MATERIA PRIMARY KEY(id_materia),
	CONSTRAINT UK_MATERIA UNIQUE(nombre)
);

CREATE TABLE SALON(
	id_salon SERIAL,
	nombre VARCHAR(30) NOT NULL,
	CONSTRAINT PK_SALON PRIMARY KEY(id_salon),
	CONSTRAINT UK_SALON UNIQUE(nombre)
);

CREATE TABLE ALUMNO(
	dni_alumno INTEGER,
	nombre VARCHAR(40) NOT NULL,
	apellido VARCHAR(40) NOT NULL,
	id_salon INTEGER DEFAULT NULL,
	CONSTRAINT PK_ALUMNO PRIMARY KEY(dni_alumno),
	CONSTRAINT FK_ALUMNO_SALON FOREIGN KEY (id_salon) REFERENCES SALON(id_salon) 
	ON DELETE SET NULL
);

CREATE TABLE NOTA(
	id_alumno INTEGER NOT NULL,
	id_materia INTEGER NOT NULL,
	anio INTEGER NOT NULL,
	trimestre INTEGER NOT NULL,
	nota NUMERIC(4,2) NOT NULL,
	CONSTRAINT PK_NOTA PRIMARY KEY(id_alumno, id_materia, anio, trimestre),
	CONSTRAINT FK_NOTA_ALUMNO FOREIGN KEY(id_alumno) REFERENCES alumno(dni_alumno),
	CONSTRAINT FK_NOTA_MATERIA FOREIGN KEY(id_materia) REFERENCES materia(id_materia),
	CONSTRAINT CH_NOTA_TRIMESTRE CHECK(trimestre IN (1, 2, 3))
);

CREATE TABLE PROFESOR(
	dni_profesor INTEGER,
	nombre VARCHAR(40) NOT NULL,
	apellido VARCHAR(40) NOT NULL,
	CONSTRAINT PK_PROFESOR PRIMARY KEY(dni_profesor)
);

CREATE TABLE PROFESOR_SALON_MATERIA(
	dni_profesor INTEGER,
	id_materia INTEGER,
	id_salon INTEGER,
	CONSTRAINT PK_PROFESOR_SALON_MATERIA PRIMARY KEY(dni_profesor, id_materia, id_salon),
	CONSTRAINT FK_PROFESOR_SALON_MATERIA__PROFESOR FOREIGN KEY(dni_profesor) REFERENCES PROFESOR(dni_profesor),
	CONSTRAINT FK_PROFESOR_SALON_MATERIA__MATERIA FOREIGN KEY(id_materia) REFERENCES MATERIA(id_materia),
	CONSTRAINT FK_PROFESOR_SALON_MATERIA__SALON FOREIGN KEY(id_salon) REFERENCES SALON(id_salon)
);