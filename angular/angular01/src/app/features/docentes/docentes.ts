// id,nombre,apellido,dni,
export interface Docente {
  id?: number;
  nombre: string;
  apellido: string;
  dni: string;
  imagen?: Blob;
}

export interface Docentes extends Array<Docente> {} // [{}]
