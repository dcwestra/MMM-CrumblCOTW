# MMM-CrumblCOTW

MagicMirror Module: Crumbl Cookies Flavor of the Week

MMM-CrumblCOTW is a MagicMirror module that displays Crumbl Cookies' weekly rotating flavors. The module fetches data directly from Crumbl Cookies' website and presents the flavors in either a carousel or list format.

![Screenshot 2025-02-05 at 09-29-53 MagicMirror²](https://github.com/user-attachments/assets/efb5bdff-3913-41e9-8c44-6b99a7c618d8)


## Features

Displays all 8 weekly Crumbl Cookies flavors

Shows cookie name, image, and description

Configurable options to enable/disable image and description

Choose between list view or carousel view

Automatically updates to reflect new weekly flavors

Customizable styling via MagicMirror's custom.css

## Installation

Navigate to your MagicMirror modules directory and clone the repository:

```bash
cd ~/MagicMirror/modules
git clone https://github.com/dcwestra/MMM-CrumblCOTW.git
cd MMM-CrumblCOTW
npm install
```

Configuration

To enable the module, add it to the config.js file in your MagicMirror setup:

```bash
{
    module: "MMM-CrumblCOTW",
    position: "top_right", // Adjust as needed
    config: {
        showDescription: true, // Show or hide cookie descriptions
        showImage: true, // Show or hide cookie images
        displayMode: "carousel" // Options: "carousel" or "list"
    }
}
```

## Configuration Options

Option|Possible values|Default|Description
------|------|------|-----------
`showDescription`|`true,false`|`true`|Optional: Show/hide the cookie description
`showImage`|`true,false`|`true`|Optional: Show/hide the cookie image
`displayMode`|`carousel,list`|`carousel`|Optional: Choose carousel (rotating cookies) or list (all cookies displayed)

## Updating

To update the module, navigate to its directory and pull the latest changes:

```bash
cd ~/MagicMirror/modules/MMM-CrumblCOTW
git pull
npm install
```

## License

This module is open-source and released under the MIT License.

## Acknowledgments

This project was inspired by a request from Reddit user cBonadonna and built for MagicMirror enthusiasts. Special thanks to the MagicMirror community!

