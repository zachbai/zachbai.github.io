module.exports = options => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
    		{
    		  test: /\.scss$/,
    		  use: [{
    			  loader: 'style-loader',
    			},
    			{
    			  loader: 'css-loader',
    			  options: {
    				sourceMap: true
    			  }
    			},
    			{
    			  loader: 'sass-loader',
    			  options: {
    				sourceMap: true
    			  }
    			}]
    		}
      ],
    }
}
