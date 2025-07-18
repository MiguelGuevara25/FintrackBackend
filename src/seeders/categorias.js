import Categorias from "../models/Categorias.js ";

const categoriasDefault = [
  { nombre: "Alimentación" },
  { nombre: "Transporte" },
  { nombre: "Entretenimiento" },
  { nombre: "Educación" },
  { nombre: "Salud" },
  { nombre: "Servicios" },
  { nombre: "Otros" },
];

export const seedCategorias = async () => {
  try {
    for (const cat of categoriasDefault) {
      const existente = await Categorias.findOne({
        where: { nombre: cat.nombre },
      });
      if (!existente) {
        await Categorias.create(cat);
      }
    }
  } catch (error) {
    console.error("❌ Error al precargar categorías:", error);
  }
};
