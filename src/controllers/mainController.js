const mainController = {
    home: (req, res) => {
        res.render('index')
    },
    boda: (req, res) => {
        res.render("boda")
    },
    cumples: (req, res) => {
        res.render("cump")
    },
    bautismo: (req, res) => {
        res.render("bautismo")
    },
    faq: (req, res) => {
        res.render("faq")
    },
    contact: (req, res) => {
        res.render("contact")
    }
}

module.exports = mainController;