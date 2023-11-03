import { Route, Routes } from "react-router-dom"
import AllConversationsPage from "./pages/AllConversationsPage"
import OneConversationPage from "./pages/OneConversationPage"
import HomePage from "./pages/HomePage"

import Layout from "./layouts/Layout"
import ConversationLayout from "./layouts/ConversationLayout"
import AboutPage from "./pages/AboutPage"

function App() {
	return (
		<>
			<div className="App">
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						{/* The conversations routes should be accessible only if a user */}
						{/* is Logged in */}
						<Route path="/conversations" element={<ConversationLayout />}>
							<Route index element={<AllConversationsPage />} />
							<Route path=":id" element={<OneConversationPage />} />
						</Route>

						{/* Login / Signup routes should be accessible to Logged out users */}

						<Route path="/signup" element={<p>Signup please</p>} />
						<Route path="/login" element={<p>Login please</p>} />

						<Route path="*" element={<h2>Error page</h2>} />
					</Route>
				</Routes>
			</div>
		</>
	)
}

export default App
