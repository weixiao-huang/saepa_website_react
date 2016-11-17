/**
 * Created by huangwx on 16-11-16.
 */
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');


const config = require('./webpack.config.prod');
const app = new(require('express'))();
const port = 3000;

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(port, (error) => {
  if (error) console.error(error);
  else console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
});
