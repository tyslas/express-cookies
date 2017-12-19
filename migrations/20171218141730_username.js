
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('username', (table) => {
      table.increments();
      table.string('username');
      table.string('password');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('username')
  ])
};
