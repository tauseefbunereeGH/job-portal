const getProfile = async (req, res) => {

    res.json({

        message: "Protected Profile",

        user: req.user

    });

};

module.exports = {

    getProfile

};