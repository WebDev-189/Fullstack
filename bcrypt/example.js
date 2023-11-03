const bcrypt = require("bcryptjs")

const password = "1234ThisIs@Pass"

const salt = bcrypt.genSaltSync(12)

const hashedPass = bcrypt.hashSync(password, salt)

console.log(
	bcrypt.compareSync(
		password,
		"$2a$13$1peSoa3i7yAYvz8O06mU5eTWwXG0g/iaipX7jEt6wQxCFG0Homlq6"
	)
)
console.log(
	bcrypt.compareSync(
		password,
		"$2a$14$U17zHnMcks9nbuGvCQPxhOJmB9ZLKJtiL26cR3.rOrzPPD/ZrMd4a"
	)
)
