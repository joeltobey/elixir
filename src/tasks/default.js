import gulp from 'gulp';
import Elixir from 'coldbox-elixir';
import inSequence from 'run-sequence';

/*
 |----------------------------------------------------------------
 | Default Task
 |----------------------------------------------------------------
 |
 | This task will run when the developer executes "gulp" on the
 | command line. We'll use this configuration object to know
 | which tasks should be fired when this task is executed.
 |
 */

gulp.task('default', function() {
    inSequence.apply(this, Elixir.tasks.names());
});
