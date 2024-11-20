/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const Dotenv = require("dotenv-webpack");

/** @type {import('next').NextConfig} */

// Remove this if you're not using Fullcalendar features

module.exports = {
  trailingSlash: true,
  reactStrictMode: false,
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, './src')
    };

    config.plugins = [
      ...config.plugins,

      /*
      new Dotenv({
        path:
        process.env.NODE_ENV === "development"
          ? "./.env.development"
          : "./.env.production",        
        systemvars: true
      })
      */
    ];

    return config
  }
}
