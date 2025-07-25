import Roles from "./Roles.js";
import Gastos from "./Gastos.js";
import Usuarios from "./Usuarios.js";
import Categorias from "./Categorias.js";

// Usuario - Rol
Roles.hasMany(Usuarios, { foreignKey: "roleId" });
Usuarios.belongsTo(Roles, { foreignKey: "roleId" });

// Usuario - Gasto
Usuarios.hasMany(Gastos, { foreignKey: "usuarioId" });
Gastos.belongsTo(Usuarios, { foreignKey: "usuarioId", as: "usuario" });

// Categoría - Gasto
Categorias.hasMany(Gastos, { foreignKey: "categoriaId" });
Gastos.belongsTo(Categorias, { foreignKey: "categoriaId", as: "categoria" });

export { Usuarios, Roles, Gastos, Categorias };
