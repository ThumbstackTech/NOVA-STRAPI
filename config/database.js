module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '3.111.24.61'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'nova'),
      user: env('DATABASE_USERNAME', 'iifl'),
      password: env('DATABASE_PASSWORD', 'Ritesh@123'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
