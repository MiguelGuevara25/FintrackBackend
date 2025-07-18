import Usuarios from "../models/Usuarios.js";
import Roles from "../models/Roles.js";
import bcrypt from "bcryptjs";

export const seedAdmin = async () => {
  try {
    const existeAdmin = await Usuarios.findOne({
      where: { username: "admin" },
    });

    if (!existeAdmin) {
      const rolAdmin = await Roles.findOne({ where: { name: "ADMIN" } });
      const passwordHash = await bcrypt.hash("admin123", 10);

      await Usuarios.create({
        nombre: "Administrador",
        email: "admin@example.com",
        username: "admin",
        password: passwordHash,
        roleId: rolAdmin.id,
      });

      console.log("✅ Usuario admin creado");
    }
  } catch (error) {
    console.error("❌ Error creando el admin:", error.message);
  }
};
