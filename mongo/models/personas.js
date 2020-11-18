const { pool, ObjectId } = require("./../utils/db");
const PERSONAS_COLLECTION = "personas";

const get = async ({
  conditions = {},
  projection = {},
  sort = {},
  limit = 50,
}) => {
  try {
    console.log(conditions);
    return (await pool())
      .collection(PERSONAS_COLLECTION)
      .find(conditions, { projection })
      .sort(sort)
      .limit(limit)
      .toArray();
  } catch (e) {
    throw e;
  }
};

const findByDates = async (start = new Date(), end) =>
  get({
    conditions: { edad: { $gte: start, $lte: end || start } },
    projection: { nombre: 1 },
  })
    .then((result) => result)
    .catch((e) => e);

const last = async () =>
  get({ sort: { _id: -1 }, limit: 1 })
    .then((result) => result)
    .catch((e) => e);

const create = async (obj) =>
  (await pool()).collection(PERSONAS_COLLECTION).insertOne(obj);

const findById = async (_id) => {
  try {
    (await pool()).collection(PERSONAS_COLLECTION).find(ObjectId(_id));
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const modifyById = async (id, obj) =>
  (await pool())
    .collection(PERSONAS_COLLECTION)
    .updateOne({ _id: `ObjectId(${id})` }, { $set: `${obj}` });
module.exports = { findByDates, get, create, findById, last };
