const smoothscroll = require("smoothscroll-polyfill");

exports.onClientEntry = () => {
	smoothscroll.polyfill();
};
