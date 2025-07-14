import { Sequelize } from "sequelize";

const sequelize = new Sequelize("finTrack", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

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
