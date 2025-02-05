Module.register("MMM-CrumblCOTW", {
    defaults: {
        showDescription: true,
        showImage: true,
        displayMode: "carousel", // "carousel" or "list"
        carouselSpeed: 10000 // 10s per item
    },

    start() {
        this.flavors = [];
        this.currentIndex = 0;
        this.getFlavors();
        this.scheduleUpdates();
    },

    getStyles() {
        return ["MMM-CrumblCOTW.css"];
    },

    getTemplate() {
        return "MMM-CrumblCOTW.njk";
    },

    getTemplateData() {
        return {
            flavors: this.config.displayMode === "list" ? this.flavors : [this.flavors[this.currentIndex]],
            showDescription: this.config.showDescription,
            showImage: this.config.showImage,
            displayMode: this.config.displayMode
        };
    },

    getFlavors() {
        this.sendSocketNotification("GET_CRUMBL_FLAVORS");
    },

    socketNotificationReceived(notification, payload) {
        if (notification === "CRUMBL_FLAVORS") {
            this.flavors = payload;
            this.updateDom();
        }
    },

    getHeader() {
        // Get the current week's Monday and Saturday
        const today = new Date();
        const monday = new Date(today);
        monday.setDate(today.getDate() - today.getDay() + 1); // Move to Monday
        const saturday = new Date(monday);
        saturday.setDate(monday.getDate() + 5); // Move to Saturday
    
        const options = { month: "short", day: "numeric" };
        const weekRange = `Week of ${monday.toLocaleDateString("en-US", options)} - ${saturday.toLocaleDateString("en-US", options)}`;
    
        return `Crumbl Cookies National Flavors<br><span class="sub-header">${weekRange}</span>`;
    },    

    scheduleUpdates() {
        setInterval(() => {
            if (this.config.displayMode === "carousel" && this.flavors.length > 0) {
                this.currentIndex = (this.currentIndex + 1) % this.flavors.length;
                this.updateDom();
            }
        }, this.config.carouselSpeed);
    }
});
