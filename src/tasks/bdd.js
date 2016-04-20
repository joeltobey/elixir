import gulp from 'gulp';
import Elixir from 'coldbox-elixir';

/*
 |----------------------------------------------------------------
 | BDD Watcher
 |----------------------------------------------------------------
 |
 | This task will keep an eye on any tasks that are part of the
 | bdd category. By default this includes TestBox
 | tests. Run `gulp bdd` and your tests will auto-trigger.
 |
 */

gulp.task( 'bdd', function() {
    new Elixir.Log.message( 'Watching for specs...' );

    Elixir.tasks
        .filter( task => task.category == 'bdd' )
        .forEach( task => gulp.watch( task.watchers, [ task.name ] ) );
});
