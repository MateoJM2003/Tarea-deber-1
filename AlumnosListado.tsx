import React, { useState } from 'react';

type Alumno = {
  name: string;
  edad: number;
  calificacion: number;
};

const AlumnosListado = () => {
  const [alumnos] = useState<Alumno[]>([

    { name: 'Mateo Lopez', edad: 21, calificacion: 10 },

    { name: 'Erick Peñafiel', edad: 21, calificacion: 7},

    { name: 'Rocio Ruales', edad: 21, calificacion: 8 },
  ]);

  //calcular el promedio
  const calcularPromedio = (alumnos: Alumno[]): number => {

    const totalCalificaciones = alumnos.reduce((suma, alumno) => suma + alumno.calificacion, 0);

    return totalCalificaciones / alumnos.length;
  
  };

  const promedio = calcularPromedio(alumnos);

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <ul>
        {alumnos.map((alumno) => (
          <li key={alumno.name}>
            {alumno.name} - Edad: {alumno.edad} - Calificación: {alumno.calificacion}
          </li>
        ))}
      </ul>
      <p>calificaciones: {promedio}</p>
    </div>
  );
};

export default AlumnosListado;

