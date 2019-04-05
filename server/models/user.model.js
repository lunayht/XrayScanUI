import bookshelf from '../config/bookshelf';

const TABLE_NAME = 'users';

class User extends bookshelf.Model {

    get tableName() {
        return TABLE_NAME;
    }

    verifyPassword(password) {
        return this.get('password') === password;
    }
}

export default User;