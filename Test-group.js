var MenuButton = videojs.getComponent("MenuButton");
var MenuItem = videojs.getComponent("MenuItem");

// New syntax
class CustomMenuButton extends MenuButton {
  createItems() {
    // Must return an array of `MenuItem`s
    // Options passed in `addChild` are available at `this.options_`
    return this.options_.myItems.map((i) => {
      var item = new MenuItem(this.player_, { label: i.name });
      item.handleClick = function () {
        /* ... */
      };
      return item;
    });
  }

  buildCSSClass() {
    return `vjs-chapters-button ${super.buildCSSClass()}`; //Add an icon to your menu
  }
}

// Register as a component, so it can be added
videojs.registerComponent("CustomMenuButton", CustomMenuButton);

// Use `addChild` to add an instance of the new component, with options
player.controlBar.addChild("CustomMenuButton", {
  controlText: "My Awesome Menu", //It shows a text when the menu is hovered
  title: "My menu",
  myItems: [{ name: "Hello" }, { name: "World" }],
});