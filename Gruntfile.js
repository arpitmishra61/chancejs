module.exports = function (grunt) {
    var js_files = ['Gruntfile.js', 'chance.js', 'test/*.js'];

    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                expr: true,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                trailing: true,
//                undef: true,
                boss: true,
                eqnull: true,
                browser: true
            },
            globals: {
                exports: true,
                module: false
            },
            all: js_files
        },
        shell: {
            'mocha-phantomjs': {
                command: './node_modules/mocha-phantomjs/bin/mocha-phantomjs test/runner.html',
                options: {
                    stdout: true,
                    stderr: true
                }
            }
        },
        watch: {
            options: { livereload: true },
            files: js_files,
            tasks: ['jshint', 'shell:mocha-phantomjs']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['shell:mocha-phantomjs']);
};
