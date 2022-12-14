import pg from "pg";

class CustomPool {
  pool: pg.Pool | null = null;
  connect(options: pg.PoolConfig) {
    this.pool = new pg.Pool(options);
    return this.pool.connect();
  }
  close() {
    if (this.pool) {
      return this.pool?.end();
    }
  }
  query(sql: string, params?: any) {
    if (this.pool) {
      return this.pool.query(sql, params);
    }
  }
  deleteTable(name: string) {
    return this.pool?.query("drop table $1", [name]);
  }
}

export default new CustomPool();
