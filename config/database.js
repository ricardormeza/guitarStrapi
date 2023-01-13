module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cevhsv1gp3jjsh3rrt9g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_6p5i'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'IkX8or5R9itfHD76jm9YlGqwj4GVmhs3'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
