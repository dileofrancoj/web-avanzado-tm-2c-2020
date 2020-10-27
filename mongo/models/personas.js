const { pool } = require("./../utils/db");
const PERSONAS_COLLECTION = "personas";

const get = async ({ conditions = {}, fields = {} }) => {
  try {
    return (await pool())
      .collection(PERSONAS_COLLECTION)
      .find(conditions, { projection: fields })
      .toArray();
  } catch (e) {
    throw e;
  }
};
const create = async (obj) =>
  (await pool()).collection(PERSONAS_COLLECTION).insertOne(obj);

const modifyById = async (id, obj) =>
  (await pool())
    .collection(PERSONAS_COLLECTION)
    .updateOne({ _id: `ObjectId(${id})` }, { $set: `${obj}` });
module.exports = { get, create };
