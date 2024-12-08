import { pool } from "../database/connection.js";
import format from "pg-format";
export const getJoyasModel = async ({
  limit = 10,
  page = 1,
  order_by = "id_ASC",
}) => {
  const [columna, orden] = order_by.split("_");
  const offset = Math.abs((page - 1) * limit);

  //Creo la consulta con la libreria format para mayor seguridad
  const formattedQuery = format(
    "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
    columna,
    orden,
    limit,
    offset
  );

  //Ejecuto la consulta y el return
  const { rows: joyas } = await pool.query(formattedQuery);
  return joyas;
};
