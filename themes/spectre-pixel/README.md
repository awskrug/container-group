# Spectre Pixel Theme
 
This theme was inspired by [Cactus Theme](https://github.com/digitalcraftsman/hugo-cactus-theme) but I wanted a timeline for my portfolio and found something I could use from [SPECTRE.CSS](https://picturepan2.github.io/spectre/).
I also changed most of the initial theme design to be something more similar to the [Material Design](https://material.io/design/introduction/#principles).
The pixel style switch was something I just did for fun to represent my passion in the game industry, and since I don't see much themes with a theme switch, I thought it'll be good to leave it for others to use.
  
# Using the theme
 
1. [Install Hugo](https://gohugo.io/overview/installing/)
2. Create a new site (replace `MySite` with your site's name). More info at [Hugo docs](https://gohugo.io/getting-started/quick-start/)
```bash
hugo new site MySite
cd MySite
```  
3. Clone this repository
```bash
git clone --recursive https://github.com/st-wong/hugo-spectre-pixel-theme.git themes/spectre-pixel
```
4. Configure
Use your favourite editor to configure `config.toml`. More details in [Configuration](#configuration).
```bash
vim config.toml
```
5. Test site (please make sure you're in the `MySite` folder)
```bash
hugo server -t spectre-pixel
```
6. Enjoy!
  
# Configuration
 
1. config.toml  
There's a config (`config.toml`) in the `exampleSite` folder which you can use, just change the details and display texts to suit your needs.
Remember to copy the file to your `MySite` folder once you're done editing the details.
2. About page  
Edit the `_index.md` file in the `exampleSite/content/about` folder to give more details about yourself.
It can contain your skillsets with [Devicons](http://konpa.github.io/devicon/) using the provided shortcode `{{< tag javascript >}}`.
However, the shortcode generates links to tags which need to exist in your posts' tags or a 404 page will be displayed.
3. Styling  
Edit the `style.css` file in the `static/css` folder to change the fonts & colors as you please.
You can use color palettes from [LOSPEC](https://lospec.com/palette-list) for the pixel theme.
Finally, please make sure the `url("../images/avatar.png")` & `url("../images/pixel.png")` are pointing to absolute URLs instead.
E.g. `https://YOUR_DOMAIN_NAME.com/images/avatar.png` & `https://YOUR_DOMAIN_NAME/images/pixel.png`
  
## Contributing
 
Found a bug or got an idea for a new feature? Feel free to use the [issue tracker](//github.com/st-wong/hugo-spectre-pixel-theme/issues) to let me know. Or directly make a [pull request](//github.com/st-wong/hugo-spectre-pixel-theme/pulls).
Please create a separate branch for your pull request.
  
## License
 
This theme is released under the MIT license. For more information read the [license](//github.com/st-wong/hugo-spectre-pixel-theme/blob/master/LICENSE.md).
  
## Acknowledgements
 
[Credits](//github.com/st-wong/hugo-spectre-pixel-theme/blob/master/CREDITS.md) 
