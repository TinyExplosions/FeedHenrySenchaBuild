module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        SENCHA_SDK: '~/touch-2.3.1',
        APP_NAME: 'fhsencha',
        copy: {
            testingfolder: {
                files: [{
                    expand: true,
                    cwd: 'client/development/build/testing/<%=APP_NAME%>',
                    src: ['**'],
                    dest: 'client/default'
                }]
            },
            productionfolder: {
                files: [{
                    expand: true,
                    cwd: 'client/development/build/production/<%=APP_NAME%>',
                    src: ['**'],
                    dest: 'client/default'
                }]
            }
        },
        exec: {
			buildtesting: {
				command: 'cd client/development && sencha app build testing',
				stdout: true
			},
			buildproduction: {
				command: 'cd client/development && sencha app build production',
				stdout: true
			},
			buildApp: {
				command: 'cd <%= SENCHA_SDK %> && sencha generate app <%=APP_NAME%> '+process.cwd()+'/client/development',
				stdout: true
			}
		}
    });


    //load our tasks;
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');
    console.log(process.cwd());
    //default tasks to run
    var target = (typeof grunt.option('target') !== 'undefined') ? grunt.option('target').toLowerCase() : 'testing';

    // grunt build will auto run the 'testing' option
    // grunt build --target=production will run production
    grunt.registerTask('build', ['exec:build'+target+'','copy:'+target+'folder']);
    grunt.registerTask('generate', ['exec:buildApp']);
    // grunt.registerTask('production', ['exec:build-'+target+'','copy:'+target+'-folder']);
};