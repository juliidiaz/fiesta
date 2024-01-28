const mainController = {
    home: (req, res) => {
        res.render('index')
    },
    boda: (req, res) => {
        res.render("boda")
    }
}

module.exports = mainController;