const db = require('../config/database');

const insert = (value) => {
    return db.query("INSERT INTO TEST VALUES( NULL, ?, NOW() )", [value]);
};

const select = () => {
    return db.query("SELECT * FROM TEST");
};

const update = (value, id) => {
    return db.query("UPDATE TEST SET VALUE = ? WHERE ID = ?", [value, id]);
};

const deletes = (id) => {
    return db.query("DELETE FROM TEST WHERE ID = ?", [id]);
};

module.exports = { insert, select, update, deletes };