/*globals module, require */

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        concat: {
            'options': {
                'separator': ';\n'
            },
            'front': {
                'src': [
                    'app.js',
                    'app.produits.service.js',
                    'app.controller.js',
                    'taskDetail/app.taskDetail.component.js'
                ],
                'dest': 'assets/front.js',
                'nonull': 'true'
            }
        },
        uglify : {
            'front': {
                'files': {
                    'assets/front.min.js': 'assets/front.js'
                }
            }
        },
        eslint: {
            options: {
                configFile: '.eslintrc'
            },
            target : ['*.js']
        }
    });

    grunt.registerTask('default', [
        'eslint',
        'concat:front',
        'uglify'
    ]);
};
