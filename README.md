#ES6 Module Bundler Setup

#### E
### In `package.json`
- babel-core
- babel-loader
- babel-preset-es2015

### ES6: In `webpack.config.js`
```
   loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		},
```


### Scss
#### (1) in `package.json`
```
    "css-loader": "^0.26.1",
    "sass-loader": "^5.0.1",
    "style-loader": "^0.13.1",
```

#### (2) in 