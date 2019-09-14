const getSensors = (req, res) => {

    res.json([1, 2]);
};

const getSensor = (req, res) => {
    res.json(req.params.id);
};

module.exports = {
    getSensors,
    getSensor
};