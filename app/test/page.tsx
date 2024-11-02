"use client";
import React from "react";
import TDSFiles from "./components/TDSFiles";
import { models } from "./lib/models";

const TestPage = () => {
	return (
		<div className="text-center flex flex-col items-center">
			<h1 className="mt-10 text-4xl">Test Page</h1>
			<p className="text-xl mt-5">This is a test page.</p>
			<div
				className="border text-center self-center
				p-3 rounded-lg text-xl mt-5
				bg-dark-300 text-gray-100 hover:bg-dark-400
				dark:bg-gray-100 dark:text-dark-200 dark:hover:bg-gray-200
				transition-colors duration-200"
			>
				This is a test page.
			</div>

			<div className="grid grid-cols-3 gap-4 mt-10">
				{models.slice(0, 9).map((model) => (
					<div key={model.name} className="w-[300px] h-[300px]">
						<TDSFiles />
					</div>
				))}
			</div>
		</div>
	);
};

export default TestPage;
