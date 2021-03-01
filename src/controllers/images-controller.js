export const sendImage = async (req, res) => {
    console.log(req.file);

    res.send("ok");
}
