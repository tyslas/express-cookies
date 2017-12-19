
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('username').del()
    .then(function () {
      // Inserts seed entries
      return knex('username').insert([
        {
          username: 'Zeke',
          password: 'ilovehuggingtrees'
        },
        {
          username: 'Cisco',
          password: 'kid'
        },
        {
          username: 'Tito',
          password: '🎄🎄🎄🎄'
        }
      ]);
    });
};
