var fs     = require('fs');
var gulp   = require('gulp');
var remove = require('rimraf');
var Elixir = require('coldbox-elixir');


describe('Scripts Task', function() {

    beforeEach(() => {
        Elixir.tasks.empty();
    });

    it('merges scripts together', function(done) {
        Elixir(mix => mix.scripts(['lib1.js', 'lib2.js']));

        runGulp(() => {
            shouldExist('includes/js/all.js');

            done();
        });
    });

    it('merges to any file the user wishes', function(done) {
        Elixir(mix => mix.scripts(['lib1.js', 'lib2.js'], './includes/js/merged.js'));

        runGulp(() => {
            shouldExist('includes/js/merged.js');

            done();
        });
    });

    it('applies a custom base directory', function(done) {
        Elixir(mix => {
            // We'll copy files over to a custom directory to test this.
            mix.copy('./resources/assets/js', './resources/assets/scripts');

            mix.scripts(['lib1.js', 'lib2.js'], null, './resources/assets/scripts');
        });

        runGulp(() => {
            shouldExist('includes/js/all.js');

            done();
        });
    });

});


var shouldExist = (file) => {
    return fs.existsSync(file).should.be.true;
};


var runGulp = assertions => {
    gulp.start('default', () => {
        assertions();

        remove.sync('./includes/js');
        remove.sync('./resources/assets/scripts');
    });
};