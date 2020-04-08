const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        console.log(req.io, req.connectedUsers);

        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);
        const targedDev = await Dev.findById(devId);

        if (!targedDev) {
            return res.status(400).json({ error: 'Dev not exists' });
        }

        if (targedDev.likes.includes(loggedDev._id)) {
            const loggedSocket = req.connectedUsers[user];
            const targetSocket = req.connectedUsers[devId];

            if (loggedSocket) {
                req.io.to(loggedSocket).emit('match', targedDev);
            }

            if (targetSocket) {
                req.io.to(targetSocket).emit('match', loggedDev);
            }
        }

        loggedDev.likes.push(targedDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
};