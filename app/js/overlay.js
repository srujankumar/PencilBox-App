function Overlay(element, options) {
    this.element = element;
    this.options = options;
    this.createOverlay()
}

Overlay.prototype.createOverlay = function() {

    var mask = document.createElement("div");
    mask.className = "mask";
    mask.id = "mask";
    mask.innerHTML = '<div class="overlay"><div class="container"><div class="overlay-container">'+
    '<div class="header"><span class="close">close</span></div></div><div class="overlay-content"></div>></div></div>'
    document.body.appendChild(mask);
    this.mask = mask;
    this.overlay = this.mask.getElementsByClassName("overlay")[0];
    this.overlayContent = this.overlay.getElementsByClassName("overlay-content")[0];
    this.closeButton = this.overlay.getElementsByClassName("close")[0];
    this.createOverlayEvents()
}
Overlay.prototype.createOverlayEvents = function() {
    var self = this;
    this.mask.addEventListener("click", function() {
        self.disposeOverlay()
    });
    this.closeButton.addEventListener("click", function() {
        self.disposeOverlay()
    });
    this.overlay.addEventListener("click", function(e) {
        e.stopPropagation();
    });

}
Overlay.prototype.disposeOverlay = function() {
    this.mask.parentElement.removeChild(this.mask);
}
Overlay.prototype.setContent = function(overlayContent) {
    if(typeof overlayContent === "string") {
        this.overlayContent.innerHTML = overlayContent;
    } else {
        this.overlayContent.appendChild(overlayContent);
    }
}
