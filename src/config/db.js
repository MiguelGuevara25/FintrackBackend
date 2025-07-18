import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "finTrack",
  "postgres",
  "root",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a PostgreSQL establecida correctamente");

    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error("❌ No se pudo conectar a PostgreSQL:", error.message);
    process.exit(1);
  }
};

connectDB();

export default sequelize;
