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
                    'app.config.js',
                    'app.produits.service.js',
                    'homePanel/app.homePanel.component.js',
                    'taskAddPanel/app.taskAddPanel.component.js',
                    'taskListPanel/app.taskListPanel.component.js',
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
