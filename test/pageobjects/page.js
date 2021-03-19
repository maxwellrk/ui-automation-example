module.exports = class Page {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page, set to empty string by default
     *
     */
    open(path = '') {
        return browser.url(`/${path}`);
    }
};
