import { Route, Routes } from "react-router-dom"
import "./App.css"
import AllConversationsPage from "./pages/AllConversationsPage"
import OneConversationPage from "./pages/OneConversationPage"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<h1>Homepage</h1>} />
				<Route path="/conversations" element={<AllConversationsPage />} />
				<Route path="/conversations/:id" element={<OneConversationPage />} />
			</Routes>
		</>
	)
}

export default App
