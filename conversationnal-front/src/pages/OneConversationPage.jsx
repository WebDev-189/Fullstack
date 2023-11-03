import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function OneConversationPage() {
	const [messages, setMessages] = useState(null)
	const { id } = useParams()

	async function fetchOneConversation() {
		try {
			const response = await axios.get(
				`http://localhost:5005/api/messages/${id}`
			)
			setMessages(response.data)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		fetchOneConversation()
	}, [id])

	if (!messages) {
		return <p>Loading...</p>
	}
	return (
		<>
			{messages.map((message) => {
				return (
					<>
						<h4 key={message._id}>{message.creator.username}</h4>
						<p>{message.content}</p>
					</>
				)
			})}
		</>
	)
}

export default OneConversationPage
