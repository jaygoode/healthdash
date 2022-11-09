import pg from "pg";

class CustomPool {
  pool: pg.Pool | null = null;
  connect(options: pg.Poolconfig) {
    this.pool = new pg.Pool(options);
    return this.pool.connect();
  }
  close() {
    if (this.pool) {
      return this.pool?.end();
    }
  }
  query(sql: String, params?: any) {
    if (this.pool) {
      return this.pool.query(sql, params);
    }
  }
  deleteTable(name: string) {
    return this.pool?.query("delete from $1", [name]);
  }
}

export default new CustomPool();
