import Elixir from 'coldbox-elixir';
import runTests from './shared/Tests';

const config = Elixir.config;

/*
 |----------------------------------------------------------------
 | TestBox Testing
 |----------------------------------------------------------------
 |
 | This task will trigger your entire TestBox spec suite and it
 | will show notifications indicating the success or failure
 | of that spec suite. It works great with your 'bdd' task.
 |
 */

Elixir.extend( 'testbox', function( src, command ){
    runTests(
        'TestBox',
        src || ( config.testing.testbox.path + '/**/*.cfc' ),
        command || 'box testbox run'
    );
});
