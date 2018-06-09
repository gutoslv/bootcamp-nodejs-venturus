module.exports = (sequelize, DataType) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataType.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    password: {
      type: DataType.STRING(12),
      allowNull: false,
      validate: {
        notEmpty:true,
        len: [8,12]
      }
    }
  });

  Users.associate = models => {
    Users.hasMany(models.Tasks, {
      onDelete: 'CASCADE'
    });
  };

  return Users;
};