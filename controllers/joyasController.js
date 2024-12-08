import { getJoyasModel, getJoyasFiltroModel } from "../models/joyasModel.js";

export const getJoyasController = async (req, res) => {
  try {
    let { limit, page, order_by } = req.query;

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
    return res
      .status(500)
      .json({ error: `Error al obtener las joyas: ${error.message}` });
  }
};

export const getFiltrosController = async (req, res) => {
  try {
    const { precio_min, precio_max, categoria, metal } = req.query;
    const result = await getJoyasFiltroModel({
      precio_min,
      precio_max,
      categoria,
      metal,
    });
    if (result.error) {
      return res.status(404).json(result);
    }
    const HATEOAS = getJoyasFiltroHateoas(result);
    return res.json(HATEOAS);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: `Error al obtener las joyas: ${error.message}` });
  }
};

/* HATEOAS JOYAS */
export const getJoyasHateoas = (joyas) => {
  const results = joyas.map((j) => {
    return {
      id: j.id,
      name: j.nombre,
      stock: j.stock,
      precio: j.precio,
      categoria: j.categoria,
      metal: j.metal,
      href: `http://localhost:3000/joyas/${j.id}`,
    };
  });

  const total = joyas.length;
  return {
    total,
    results,
  };
};

/* HATEOAS JOYAS FILTRO */
export const getJoyasFiltroHateoas = (joyas) => {
  const results = joyas.map((j) => {
    return {
      id: j.id,
      name: j.nombre,
      stock: j.stock,
      precio: j.precio,
      categoria: j.categoria,
      metal: j.metal,
      href: `http://localhost:3000/joyas/${j.id}`,
    };
  });

  const total = joyas.length;
  return {
    total,
    results,
  };
};
