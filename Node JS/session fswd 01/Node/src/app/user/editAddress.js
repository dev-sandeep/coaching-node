const { Address } = require("../../model/Address");

exports.editAddress = async (req, res, next) => {
  const isEdit = await Address.edit({ line1: req.body.line1 });
  if (!isEdit) {
    next();
  } else {
    const resp = Address("line1 already exists");
    res.status(500).send(resp);
  }
};
exports.editAddress = async (req, res, next) => {
  const isEdit = await Address.edit({ line2: req.body.line2 });
  if (!isEdit) {
    next();
  } else {
    const resp = Address("line2 already exists");
    res.status(500).send(resp);
  }
};
exports.editAddress = async (req, res, next) => {
  const isEdit = await Address.edit({ city: req.body.city });
  if (!isEdit) {
    next();
  } else {
    const resp = Address("city already exists");
    res.status(500).send(resp);
  }
};
exports.editAddress = async (req, res, next) => {
  const isEdit = await Address.edit({ state: req.body.state });
  if (!isEdit) {
    next();
  } else {
    const resp = Address("state already exists");
    res.status(500).send(resp);
  }
};
exports.editAddress = async (req, res, next) => {
  const isEdit = await Address.edit({ phone: req.body.phone });
  if (!isEdit) {
    next();
  } else {
    const resp = Address("phoneno already exists");
    res.status(500).send(resp);
  }
};
exports.editAddress = async (req, res, next) => {
  const isEdit = await Address.edit({ cid: req.body.cid });
  if (!isEdit) {
    next();
  } else {
    const resp = Address("cid already exists");
    res.status(500).send(resp);
  }
};
