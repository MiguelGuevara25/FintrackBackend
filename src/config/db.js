import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "fintrack_xj9l",
  "fintrack_xj9l_user",
  "Vp3WqtXZqIXLapd10FnNv9Tc8w2bY5PX",
  {
    host: "dpg-d1qomsmmcj7s73988pmg-a.oregon-postgres.render.com",
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true, // Requiere SSL
        rejectUnauthorized: false, // Permite conexiones no verificadas (útil en algunos entornos)
      },
    },
  }
);

const connectDB = async () => {
  try {
    // Intentar conectar con la base de datos
    await sequelize.authenticate();
    console.log("✅ Conexión a PostgreSQL establecida correctamente");

    // Sincronizar la base de datos
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error("❌ No se pudo conectar a PostgreSQL:", error.message);
    process.exit(1); // Si no puede conectar, finalizar el proceso
  }
};

connectDB();

export default sequelize;
