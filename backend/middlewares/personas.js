const { schemas } = require("./schemas/personas");

const validateCreate = (req, res, next) => {
  const { error, value } = schemas.create.validate(req.body);
  error ? res.status(422).json({ error: error.details[0].message }) : next();
};

module.exports = { validateCreate };
