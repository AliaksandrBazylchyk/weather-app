import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import Dotenv from 'dotenv-webpack';
import 'webpack-dev-server';

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src','index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
        ]
    },
    resolve:
        {
            extensions: ['.tsx', '.ts', '.js'],
        },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            filename: 'index.html',
        }),
        new Dotenv()
    ]
}

export default config;