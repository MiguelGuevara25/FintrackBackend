import { Sequelize } from "sequelize";

const sequelize = new Sequelize("finTrack", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
