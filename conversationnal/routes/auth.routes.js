const router = require("express").Router()
const User = require("./../models/User.model")

/**
 * ! All routes are prefixed by /api/auth
 */

router.post("/", async (req, res, next) => {
	try {
		const user = req.body
		const createdUser = await User.create(user)
		res.status(201).json(createdUser)
	} catch (error) {
		next(error)
	}
})

module.exports = router
