//console.log("BITCOIN IDE! YEAH!");

var stackVisualizer;
var scriptDebugger;

/* All javascript manipulation for the page goes in here: */
$( document ).ready(function() {
	/* All javascript manipulation for the page goes in here */

	//$("#stack-visualizer").text(editor.getSession().getValue());

	stackVisualizer = new StackVisualizer("stack-visualizer");
	stackVisualizer2 = new StackVisualizer("stack-visualizer", true);
	stackVisualizer.push("STACK VALUE TEST1");
	stackVisualizer.push("STACK VALUE TEST2");
	
	stackVisualizer.push("STACK VALUE TEST3");

	stackVisualizer.push("STACK VALUE TEST2");
	stackVisualizer.push("STACK VALUE TEST3");
	stackVisualizer.push("STACK VALUE TEST2");
	stackVisualizer.push("STACK VALUE TEST3");
	stackVisualizer.clear();
	stackVisualizer.push("STACK VALUE TEST2");
	stackVisualizer.push("STACK VALUE TEST3");
	stackVisualizer.push("STACK VALUE TEST2");
	stackVisualizer.push("STACK VALUE TEST3");
	stackVisualizer.push("STACK VALUE TEST2");
	stackVisualizer.push("STACK VALUE TEST3");
	stackVisualizer.push("STACK VALUE TEST2");
	stackVisualizer.push("STACK VALUE TEST3");
	

	stackVisualizer.push("STACK VALUE TEST4");	

	// stackVisualizer.clear();

	p = stackVisualizer.pop();
	// stackVisualizer.pop();
	// stackVisualizer.push("STACK VALUE TEST4");
	// stackVisualizer.push("STACK VALUE TEST4.5");
	// p = stackVisualizer.remove(2);
	// stackVisualizer.insert("STACK VALUE TEST5", 3);
	// p = stackVisualizer.remove(2);

	// p = stackVisualizer.pop();
	// stackVisualizer.insert("STACK VALUE T", 2);
	// stackVisualizer.insert("STACK VALUE MIDDLE", 3);
	// stackVisualizer.insert("STACK VALUE MIDDLE", 3);
	// stackVisualizer.push("STACK VALUE TEST6");
	// stackVisualizer.pop();
	console.log(stackVisualizer.stack);


	// Attach event listeners to the assemble and disassemble button
	$( "body" ).delegate( "#assemble-button", "click", function() {
		var script = editor.getSession().getValue();
		$(".assembly-content").val(assembleToHex(script));
	});

	$( "body" ).delegate( "#disassemble-button", "click", function() {
		var hex = $(".assembly-content").val();
		editor.getSession().setValue(disassembleFromHex(hex));
	});

	// Attach event listeners to the debugging buttons
	scriptDebugger = new ScriptDebugger();
	$( "body" ).delegate( "#run-button", "click", function() {
		scriptDebugger.runFromBeginning();
	});

	$( "body" ).delegate( "#next-button", "click", function() {
		scriptDebugger.nextStep();
	});

	$( "body" ).delegate( "#continue-button", "click", function() {
		scriptDebugger.continueExecution();
	});
});