var fs     = require('fs');
var gulp   = require('gulp');
var remove = require('rimraf');
var should = require('chai').should();
var Elixir = require('coldbox-elixir');


describe('Styles Task', function() {

    beforeEach(() => {
        Elixir.tasks.empty();
    });

    it('merges stylesheets together', function(done) {
        Elixir(mix => mix.styles(['one.css', 'two.css']));

        runGulp(() => {
            shouldExist('includes/css/all.css');

            done();
        });
    });

    it('merges to any file the user wishes', function(done) {
        Elixir(mix => mix.styles(['one.css', 'two.css'], './includes/css/merged.css'));

        runGulp(() => {
            shouldExist('includes/css/merged.css');

            done();
        });
    });

    it('applies a custom base directory', function(done) {
        Elixir(mix => {
            // We'll copy files over to a custom directory to test this.
            mix.copy('./resources/assets/css', './resources/assets/styles');

            mix.styles(['one.css', 'two.css'], null, './resources/assets/styles');
        });

        runGulp(() => {
            shouldExist('includes/css/all.css');

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

        remove.sync('./includes/css');
        remove.sync('./resources/assets/styles');
    });
};