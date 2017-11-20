/*globals module, require */

/**
 * Industrialisation du code
 */

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // Concaténation des différents fichiers de l'application pour n'en créer qu'un
        concat: {
            'options': {
                'separator': ';\n'
            },
            'front': {
                // Fichiers d'origine
                'src': [
                    'app.js',
                    'app.config.js',
                    'app.produits.service.js',
                    'homePanel/app.homePanel.component.js',
                    'taskAddPanel/app.taskAddPanel.component.js',
                    'taskListPanel/app.taskListPanel.component.js',
                    'taskDetail/app.taskDetail.component.js'
                ],
                // Fichier de destination
                'dest': 'assets/front.js',
                // Crash du processus si un fichier n'existe pas
                'nonull': 'true'
            }
        },

        /**
         * Ici on convertit les sources d'un format humainement lisible
         * à un format optimisé pour économiser la bande passante et accélérer le temps de chargement du site
         */
        uglify : {
            'front': {
                'files': {
                    'assets/front.min.js': 'assets/front.js'
                }
            }
        },

        /**
         * Vérifie la qualité syntaxique du code et vérifie que les nomenclatures du code ont été respectés
         */
        eslint: {
            options: {
                // Fichier définissant les choses admises ou non au sein du code du projet
                configFile: '.eslintrc'
            },
            target : ['**/*.js']
        }
    });

    // Tâche par défaut, peut donc être appeleé simplement par la commande "grunt" seule
    grunt.registerTask('default', [
        'eslint',
        'concat:front',
        'uglify'
    ]);
};
