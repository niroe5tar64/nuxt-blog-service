import { Model } from '@vuex-orm/core';
import User from './User';

export default class Post extends Model {
  static entity = 'posts';
  static primaryKey = 'id';

  static fields() {
    return {
      id: this.increment(),
      user_id: this.string(''),
      title: this.string(''),
      body: this.string(''),
      created_at: this.string(''),

      user: this.belongsTo(User, 'user_id'),
    };
  }
}
