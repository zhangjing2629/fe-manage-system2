module.exports = (api, options, rootOptions) => {

    /**
     * --modern 使用现代模式构建应用，为现代浏览器交付原生支持的 ES2015 代码，并生成一个兼容老浏览器的包用来自动回退
     * --mode test, sandbox,online 对应.env.test 不同环境模式
     * 
     * 
    */

    const pkg = {
        scripts: {
            "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
            "build": "node build/build.js",
            "build:dll": "webpack --config build/webpack.dll.conf.js"
        },
        devDependencies: {
            "autoprefixer": "^7.1.2",
            "babel-core": "^6.22.1",
            "babel-helper-vue-jsx-merge-props": "^2.0.3",
            "babel-loader": "^7.1.1",
            "babel-plugin-syntax-jsx": "^6.18.0",
            "babel-plugin-transform-runtime": "^6.22.0",
            "babel-plugin-transform-vue-jsx": "^3.5.0",
            "babel-preset-env": "^1.3.2",
            "babel-preset-stage-2": "^6.22.0",
            "chalk": "^2.0.1",
            "copy-webpack-plugin": "^4.0.1",
            "css-loader": "^0.28.0",
            "extract-text-webpack-plugin": "^3.0.0",
            "file-loader": "^1.1.4",
            "friendly-errors-webpack-plugin": "^1.6.1",
            "html-webpack-plugin": "^2.30.1",
            "node-notifier": "^5.1.2",
            "optimize-css-assets-webpack-plugin": "^3.2.0",
            "ora": "^1.2.0",
            "portfinder": "^1.0.13",
            "postcss-import": "^11.0.0",
            "postcss-loader": "^2.0.8",
            "rimraf": "^2.6.0",
            "semver": "^5.3.0",
            "shelljs": "^0.7.6",
            "uglifyjs-webpack-plugin": "^1.1.1",
            "url-loader": "^0.5.8",
            "vue-loader": "^13.3.0",
            "vue-style-loader": "^3.0.1",
            "vue-template-compiler": "^2.5.2",
            "webpack": "^3.6.0",
            "webpack-bundle-analyzer": "^2.9.0",
            "webpack-dev-server": "^2.9.1",
            "webpack-merge": "^4.1.0"
        },
        dependencies: {
            "axios": "^0.15.3",
            "babel-polyfill": "^6.23.0",
            "element-ui": "2.3.3",
            "mavon-editor": "^2.5.4",
            "vue": "^2.5.16",
            "vue-cropperjs": "^2.2.0",
            "vue-quill-editor": "3.0.6",
            "vue-router": "^3.0.1",
            "vue-schart": "^1.0.0",
            "vuedraggable": "^2.16.0"
        },
        babel: {},
    };
    // 安装一些基础公共库
    api.extendPackage(pkg)

    // 安装 vuex
    // if (options.vuex) {
    //     api.extendPackage({
    //         dependencies: {
    //             vuex: '^3.0.1'
    //         }
    //     });

    //     api.render('./template/vuex');
    // }

    // 安装 element-ui 库
    // if (options.elementUI) {
    //     api.extendPackage({
    //         devDependencies: {
    //             "element-ui": "^2.4.6"
    //         }
    //     });
    // }

    // 公共基础目录和文件
    api.render('./template');
    // 配置文件  
}
