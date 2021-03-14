export const encrypt = async (req, res) => {
    const { txt, psw } = req.params;
    res.status(200).json({ txt, psw });
}

export const decrypt = async (req, res) => {
    const { txt, psw } = req.params;
    res.status(200).json({ txt, psw });
}
