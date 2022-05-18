import qs from 'qs';

export class ApiQuery {
  private _query: string;

  constructor(query: string) {
    this._query = query;
  }

  get query() {
    return this._query;
  }

  set query(val) {
    this._query = val;
  }
}
