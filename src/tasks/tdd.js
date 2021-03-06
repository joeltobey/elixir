import gulp from 'gulp';
import Elixir from 'coldbox-elixir';

/*
 |----------------------------------------------------------------
 | TDD Watcher
 |----------------------------------------------------------------
 |
 | This task will keep an eye on any tasks that are part of the
 | bdd category. By default this includes TestBox XUnit
 | tests. Run `gulp bdd` and your tests will auto-trigger.
 |
 */

gulp.task( 'tdd', function() {
    new Elixir.Log.message( 'Watching for specs...' );

    Elixir.tasks
        .filter( task => task.category == 'tdd' )
        .forEach( task => gulp.watch( task.watchers, [ task.name ] ) );
});
