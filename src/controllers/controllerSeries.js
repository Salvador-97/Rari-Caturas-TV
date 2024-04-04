//Se usa un objeto para mejor manejo y uso de metodos
const controller = {};

controller.start = (req, res) => {
    res.render('index');
};

module.exports = controller;