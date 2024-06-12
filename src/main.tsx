import { useEffect } from "react";
import ReactDOM from "react-dom/client";

import { OKContract, OKInstance, OKWidget } from "@okcontract/sdk-react";

import "./assets/style.css";

// Compound v3
const interactionID = "QOmvyY302kRJNSgyRrvW";

const App = () => {
	useEffect(() => {
		document.body.classList.add("bg-base-200");

		return () => {
			document.body.classList.remove("bg-base-200");
		};
	}, []);

	return (
		<OKContract>
			<OKInstance>
				<div className="container h-screen mx-auto py-12 px-4">
					<div className="max-w-md grid justify-center mx-auto">
						<h1 className="mb-6 text-center">Supply USDC on Compound III</h1>
						<OKWidget id={interactionID} />
					</div>
				</div>
			</OKInstance>
		</OKContract>
	);
};

const root = document.getElementById("root");

if (root) {
	ReactDOM.createRoot(root).render(<App />);
}
