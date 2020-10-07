const home = (req, res) => {
    console.log("Home Route");
    return res.json({msg: "Home Route"}).status(200);
};

const about = (req, res) => {
    console.log("About Route");
    return res.json({msg: "Aboute Route"}).status(200);
};

module.exports = {
    home,
    about
};
