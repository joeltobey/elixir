var fs     = require('fs');
var gulp   = require('gulp');
var remove = require('rimraf');
var should = require('chai').should();
var Elixir = require('coldbox-elixir');


describe('Coffee Task', function() {

    beforeEach(() => {
        Elixir.tasks.empty();
    });

    xit('compiles CoffeeScript files to the includes/js directory', done => {
        Elixir(mix => mix.coffee('module.coffee'));

        runGulp(() => {
            shouldExist('./includes/js/module.js');

            done();
        });
    });


   xit('can compile to a different path', done => {
        Elixir(mix => mix.coffee('module.coffee', './includes/scripts/file.js'));

        runGulp(() => {
            shouldExist('./includes/scripts/file.js');

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
        remove.sync('./includes/scripts');
    });
};