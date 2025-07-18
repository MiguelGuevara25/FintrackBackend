import Roles from "../models/Roles.js";

const rolesDefault = [{ name: "USER" }, { name: "ADMIN" }];

export const seedRoles = async () => {
  try {
    for (const rol of rolesDefault) {
      const existente = await Roles.findOne({
        where: { name: rol.name },
      });
      if (!existente) {
        await Roles.create(rol);
      }
    }
  } catch (error) {
    console.error(error);
  }
};
