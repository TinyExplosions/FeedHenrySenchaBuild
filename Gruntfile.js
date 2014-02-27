module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        SENCHA_SDK: '~/touch-2.3.1',
        APP_NAME: 'fhsencha',
        copy: {
            builtPackage: {
                files: [{
                    expand: true,
                    cwd: 'client/development/build/<%= grunt.config.get("environment")%>/<%=APP_NAME%>',
                    src: ['**'],
                    dest: 'client/<%= grunt.config.get("clientPackage")%>'
                }]
            }
        },
        exec: {
            build: {
                command: 'cd client/development && sencha app build <%= grunt.config.get("environment")%>',
                stdout: true
            },
			generateApp: {
				command: 'cd <%= SENCHA_SDK %> && sencha generate app <%=APP_NAME%> '+process.cwd()+'/client/development',
				stdout: true
			}
		}
    });

    //load our tasks;
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');

    // Parse optional flags for Sencha Environment and FH Package desination
    var environment = (typeof grunt.option('environment') !== 'undefined') ? grunt.option('target').toLowerCase() : 'testing';
    var clientPackage = (typeof grunt.option('package') !== 'undefined') ? grunt.option('package').toLowerCase() : 'default';

    // grunt build will auto run the 'testing' environment and put it in the 'default' package
    // add --environment=[testing,package,production,native] and/or --package=<packagename> so specify targets
    grunt.registerTask('generate', ['exec:generateApp']);
    grunt.registerTask('build', 'Build the specified target', function() {
        grunt.config.set('environment', environment);
        grunt.config.set('clientPackage', clientPackage);
        grunt.task.run('exec:build');
        grunt.task.run('copy:builtPackage');
        grunt.log.writeln("Building the "+environment+" environment, and moving to the "+clientPackage+" dir");
    });







};