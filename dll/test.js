class TestPlugin {

    constructor(options) {

    }

    apply(compiler) {
        // console.log(compiler, '!!!')
        const options = this.options;
        compiler.plugin("compilation", (compilation, params) => {
            // compilation.entrypoints['xxxx'] = {
            //     name: 'xxxx.js',
            // }
            // console.log(11, '###')
            // console.log(compilation.entrypoints, '------')
        });

        compiler.plugin('emit', function (compilation) {
            compilation.entrypoints['xxxx'] = {
                name: 'xxxx.js',
            }
            console.log(11, '###')
            console.log(compilation.entrypoints, '------')
        })
    }
}

module.exports = TestPlugin;