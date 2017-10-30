# Manus & Dragons - Frederic Character Helper.

A hobby application for our roleplaying in Manus & Dragons games (Based in Dungeons&Dragons).

If do you like to take part of the proyect, you could contact with me.

## Project Structure

This project runs a [webpack-dev-server][webpackDevServerSite] for development, and runs an express server to deploy on heroku. If you want to deploy your project on your heroku account, the only thing you need to do is type `git push heroku yourproject`. You can edit any file under the `src` directory.
Also, the data is retrieved from a Mongo DB located in a mLab server. 
The server is easily editable from the "server.js" file. So you can add your own server and data.

## Project Setup

1. Clone or download the project.
2. The entry file is **/src/js/main.jsx**. You can overwrite this.
3. Run `npm run dev` and visit [http://localhost:5000](http://localhost:5000).

[webpackSite]:https://webpack.github.io/
[herokuSite]:https://www.heroku.com/
[webpackDevServerSite]:https://webpack.github.io/docs/webpack-dev-server.html

## License

This project requires the owner permission to use.

Any included software are copyright to their respective authors and mostly under MIT or [SIL OFL][silOfl].



