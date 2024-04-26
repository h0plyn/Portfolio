import "./src/styles/global.css";
import smoothscroll from "smoothscroll-polyfill";

export const onClientEntry = () => {
	smoothscroll.polyfill();
};
