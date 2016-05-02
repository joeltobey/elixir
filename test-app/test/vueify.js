var fs     = require( 'fs' );
var gulp   = require( 'gulp' );
var remove = require( 'rimraf' );
var Elixir = require( 'coldbox-elixir' );

describe( 'Vueify + Browserify Task', function(){

    beforeEach( () => {
        Elixir.tasks.empty();
    } );

    it( 'can compile vue components', function( done ){
        Elixir( mix => mix.browserify( "main.js" ) );
        runGulp( () => {
            shouldExist( 'includes/js/main.js' );
            done();
        } );

    });

});

var shouldExist = ( file ) => {
    return fs.existsSync( file ).should.be.true;
};

var runGulp = assertions => {
    gulp.start( 'default', () => {
        assertions();
        remove.sync( './includes/js' );
    } );
};