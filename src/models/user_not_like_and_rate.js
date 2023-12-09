import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_not_like_and_rate extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    full_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_not_like_and_rate',
    timestamps: false
  });
  }
}
