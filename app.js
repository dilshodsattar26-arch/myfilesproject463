const coreHandlerInstance = {
    version: "1.0.463",
    registry: [1613, 421, 1388, 449, 996, 1700, 975, 1924],
    init: function() {
        const nodes = this.registry.filter(x => x > 304);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreHandlerInstance.init();
});