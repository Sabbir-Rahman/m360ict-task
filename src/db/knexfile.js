module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: 3307,
      user: 'root',
      password: '',
      database: 'm360'
    },
    migrations: {
      tableName: 'product_migrations',
    }
  }
}
