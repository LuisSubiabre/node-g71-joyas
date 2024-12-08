import { getJoyasModel } from "../models/joyasModel.js";

export const getJoyas = async (req, res) => {
  try {
    let { limit, page, order_by } = req.query;

    console.log("limit", limit);
    if (limit === undefined) {
      limit = 2;
    }
    if (page === undefined) {
      page = 1;
    }
    if (order_by === undefined) {
      order_by = "id_ASC";
    }

    const result = await getJoyasModel({ limit, page, order_by });
    const HATEOAS = getJoyasHateoas(result);
    return res.json(HATEOAS);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Ocurrió un error en el servidor." });
  }
};

export const getFiltros = (req, res, { limit = 10 }) => {
  res.send("Filtros");
};

/* HATEOAS */
export const getJoyasHateoas = (joyas) => {
  const results = joyas.map((j) => {
    return {
      id: j.id,
      name: j.nombre,
      stok: j.stock,
      href: `http://localhost:3000/joyas/${j.id}`,
    };
  });

  const total = joyas.length;
  return {
    total,
    results,
  };
};
