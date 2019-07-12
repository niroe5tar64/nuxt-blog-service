import { Database } from '@vuex-orm/core';
import User from '~/models/User';
import Post from '~/models/Post';

const database = new Database();

database.register(User, {});
database.register(Post, {});

export default database;
