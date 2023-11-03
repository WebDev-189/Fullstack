import React from "react"
import { Outlet } from "react-router-dom"
function ConversationLayout() {
	return (
		<div>
			<Outlet />
		</div>
	)
}

export default ConversationLayout
