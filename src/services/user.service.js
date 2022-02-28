const User = require('../models/user.model')
const CustomError = require('../utils/custom-error')

class UserService {
    async update(userId, data) {
        const user = await User.findByIdAndUpdate(
            { _id: userId },
            { $set: data },
            { new: true }
        )

        if (!user) throw new CustomError('User does not exist!', 404)

        return user
    }
}

module.exports = new UserService()