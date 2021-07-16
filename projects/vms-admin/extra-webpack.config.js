const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'sysProcess.env': {
                VMS_API_URL: JSON.stringify(process.env.VMS_POC_API_URL)
            }
        })
    ]
}