const userGetcall = (req, res) => {
    const urlParam = req.body;
    res.status(200).json(urlParam);
    console.log(urlParam);
}


module.exports = {
    userGetcall
}