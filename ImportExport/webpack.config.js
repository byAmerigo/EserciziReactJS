module.exports = {
    mode: 'development',
    entry: './src/app.js', //da dove prende il file
    output:{
        path: `${__dirname}/public`, //cartella di destinazinoe
        filename: 'bundle.js', //nome della cartella
    },
    devServer:{
        contentBase: `${__dirname}/public`,
    },
    module:{
        rules:[
            {
            test: /.js$/, //prendi i file js
            loader: 'babel-loader', //fai partire il loader indicato
            exclude: /node_modules/, //escludi i file dentro questa cartella
            }
        ]
    },
    
}