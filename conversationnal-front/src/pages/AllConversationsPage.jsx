import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
function AllConversationsPage() {
	const [conversations, setConversations] = useState(null)

	async function fetchConversations() {
		try {
			const response = await axios.get("http://localhost:5005/api/conversation")
			setConversations(response.data)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		fetchConversations()
	}, [])

	if (!conversations) {
		return <p>Loading...</p>
	}
	return (
		<div>
			{conversations.map((conversation) => {
				return (
					<Link
						to={`/conversations/${conversation._id}`}
						key={conversation._id}>
						{" "}
						Conversation between{" "}
						{conversation.participants
							.map((participant) => participant.username)
							.join(", ")}
					</Link>
				)
			})}
		</div>
	)
}

export default AllConversationsPage
