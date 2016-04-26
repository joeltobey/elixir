import gulp from 'gulp';
import gutil from 'gulp-util';
import Elixir from 'coldbox-elixir';
import inSequence from 'run-sequence';

/*
 *----------------------------------------------------------------
 * Default Task
 *----------------------------------------------------------------
 *
 * This task will run when the developer executes "gulp" on the
 * command line. We'll use this configuration object to know
 * which tasks should be fired when this task is executed.
 * 
 * If not tasks are defined, this task will report it and end execution
 */

gulp.task( 'default', function(){
	var tasks = Elixir.tasks.names();
	
	// Verify length
	if( tasks.length ){
		inSequence.apply( this, Elixir.tasks.names() );
	} else {
		gutil.log( "No tasks defined in your 'Gulpfile.js'.  So I am exiting the beautiful world of ColdBox Elixir!" );
	}
   
});
