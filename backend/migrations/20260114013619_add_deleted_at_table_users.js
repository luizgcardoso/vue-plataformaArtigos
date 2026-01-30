
exports.up = function (knex, Promise) {
  return knex.schema.table('users', table => {
    table.timestamp('deletedAt');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.table('users', table => {
    table.dropColumn('deletedAt');
  });
};
