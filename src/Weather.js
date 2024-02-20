import React from "react";
import axios from "axios";

export default function () {
	function handleResponse(response) {
		alert(`the weather in ${city} is ${response.data.main.temp}`);
	}
	let city = "brussels";
	let apiKey = "ab8e7ef210556986d1c9a75d6007b825";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(handleResponse);
	return <h1>The weather app </h1>;
}
