require("dotenv").config()
const pgp = require("pg-promise")();
const db = pgp(process.env.URL);


// Post daily menu in database

const storeInputData = async (data) => {
    const serializedData = JSON.stringify(data);
    const query = "INSERT INTO input_data (data) VALUES ($1) RETURNING id";
    
    try {
        const result = await db.one(query, [serializedData]);
        return result.id;
    } catch (error) {
        console.error("Error storing input data",error);
        throw error;
    }

};

const postReview = async (name, rating, comment) => {
    try {
        const result = await db.none(`
            INSERT INTO reviews (name, rating, comment)
            VALUES ($1, $2, $3)
        `, [name, rating, comment]);

        res.status(200).json({message: "Review added successfully"});
        return result.id
    } catch (err) {
        console.error("Error,", err);
        res.status(500).json({error: "Something went wrong"});
    }
};

const deletePreviousMenuData = async (menuId) => {
    const deleteQuery = "DELETE FROM input_data WHERE id = $1";

    try {
        await db.none(deleteQuery, [menuId]);
        console.log("Previous menu data deleted");
    } catch (error) {
        console.error("Error deleting previous menu data:", error);
        throw error;
    }
}

module.exports = { storeInputData, postReview, deletePreviousMenuData };