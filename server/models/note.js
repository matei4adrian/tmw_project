module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Note", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50],
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastModified: { type: DataTypes.STRING, allowNull: false },
  });
};
