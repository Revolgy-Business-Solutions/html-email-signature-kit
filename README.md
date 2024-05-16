# HTML email signature kit

This is a simple HTML email signature kit that you can use to create your own email signature.

## How to use

You can extract any part of this repository and use it in your own email signature. You can also use the whole template as a starting point.

### Structure

This repository contains the HTML tags in `tags` repository and email signature templates in `templates` repository.

### Tags

This repository contains a set of HTML tags in `tags` folder. You can use these tags to create your own email signature. These tags are designed to be used in a table layout which is supported by most email clients.

### Templates

#### Vue templates

Another repository, `templates`, contains some pre-designed email signatures that you can use as a starting point. Those templates are written in Vue, but you can easily convert them to HTML. To do so:

- Use only the content in `template` tag from the Vue file, not the `template` itself
- Remove `:` in front of `styles`, `width` and other attributes
- Remove `v-if`, `v-else-if` and `v-else` attributes completely
- Replace variables with your real values

We kept the Vue files in this repository to show which parts are dependent on each other. If you see same parts throughout the template, you know that you need to handle these parts together.

#### Assets.js

`assets.js` file contains assets used in the templates. You can use these assets in your own email signature. The most important part is FONT_FAMILY variable where you can see all the fonts used in the templates. Other variables are there just for the list.

## How to contribute

If you have a nice email signature that you want to share, feel free to create a pull request. You can also create an issue if you have any suggestions or questions.
