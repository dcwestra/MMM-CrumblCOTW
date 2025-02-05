const NodeHelper = require("node_helper");
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = NodeHelper.create({
    start() {
        console.log("MMM-CrumblCOTW helper started...");
    },

    async getCrumblFlavors() {
        const URL = "https://crumblcookies.com/";

        try {
            const { data } = await axios.get(URL);
            const $ = cheerio.load(data);
            const scriptContent = $("script#__NEXT_DATA__").html();

            if (scriptContent) {
                const jsonData = JSON.parse(scriptContent);
                const cookies = jsonData.props?.pageProps?.products?.cookies || [];

                const flavors = cookies.map(cookie => ({
                    name: cookie.name,
                    image: cookie.newAerialImage,
                    description: cookie.description
                }));

                return flavors;
            } else {
                console.error("No __NEXT_DATA__ script found.");
                return [];
            }
        } catch (error) {
            console.error("Error fetching Crumbl Cookies data:", error.message);
            return [];
        }
    },

    socketNotificationReceived(notification, payload) {
        if (notification === "GET_CRUMBL_FLAVORS") {
            this.getCrumblFlavors().then(flavors => {
                this.sendSocketNotification("CRUMBL_FLAVORS", flavors);
            });
        }
    }
});
