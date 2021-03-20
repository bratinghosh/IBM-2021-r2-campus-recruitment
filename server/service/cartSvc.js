let deduplicate = (rows) => {
    //Deduplicate logic
    ids = {};
    updated_rows = [];
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].id in ids) {
            ids[rows[i].id] += 1;
        } else {
            ids[rows[i].id] = 1;
            updated_rows.push({id: rows[i].id, name: rows[i].name, price: rows[i].price, quantity: 1});
        }
    }

    for (var i = 0; i < updated_rows.length; i++) {
        updated_rows[i].quantity = ids[updated_rows[i].id];
    }

    rows = updated_rows;

    return rows;
};


module.exports = deduplicate;