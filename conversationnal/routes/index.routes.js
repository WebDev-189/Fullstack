const router = require("express").Router()
const User = require("./../models/User.model")
/**
 * ! All routes are prefixed by /api
 */

router.get("/", async (req, res, next) => {
	try {
		const user = await User.findById("hello")
		res.json(user)
	} catch (error) {
		next({ error, route: "/api/conversation" })
	}
})

router.use("/auth", require("./auth.routes"))

router.use("/conversation", require("./conversation.routes"))
router.use("/messages", require("./messages.routes"))
router.use("/users", require("./users.routes"))

module.exports = router
