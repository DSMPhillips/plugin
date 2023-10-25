const MenuItem = videojs.getComponent("MenuItem");
const MenuButton = videojs.getComponent("MenuButton");

class CustomMenuButton extends MenuButton {
  createItems() {
    const items = [];
    const { myItems } = this.options_;

    if (!Array.isArray(myItems)) items;

    myItems.forEach(({ clickHandler, ...item }) => {
      const menuItem = new MenuItem(this.player(), item);

      if (clickHandler) {
        //This overrides https://github.com/videojs/video.js/blob/main/src/js/menu/menu-item.js#L107-L109
        menuItem.handleClick = clickHandler;
      }
      items.push(menuItem);
    });

    return items;
  }

  buildCSSClass() {
    return `${super.buildCSSClass()}`;
  }
}

videojs.registerComponent("CustomMenuButton", CustomMenuButton);

var player = videojs("my-player", {
  controlBar: {
    //customMenuButton uses the ability of videojs to do type inference
    customMenuButton: {
      controlText: "Custom menu 1",
      title: "Menu 1",
      className: "vjs-chapters-button", //uses the chapters icon
      myItems: [
        {
          label: "Pink",
          clickHandler() {
            this.el().style = "background-color:pink";
          },
        },
        {
          label: "Green",
          clickHandler() {
            this.el().style = "background-color:green";
          },
        },
      ],
    },
    //If you want a specific name for your CustomMenuButton instance
    consoleLoggerMenu: {
      componentClass: "CustomMenuButton", //Defines the component Class to use
      controlText: "Custom menu 2",
      title: "Menu 2",
      className: "vjs-mute-control",  //uses the volume icon
      myItems: [
        {
          label: "Menu item 1",
          clickHandler() {
            console.log(this.label);
          },
        },
        {
          label: "Menu item 2",
          clickHandler() {
            console.log(this.label);
          },
        },
      ],
    },
  },
});

//Now you can access you custom menu instance
player.controlBar.customMenuButton;
player.controlBar.consoleLoggerMenu;
