 
```   
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>

<div id="output" style="min-height: 200px; white-space: pre; border: 1px solid black;"
     ondragenter="document.getElementById('output').textContent = ''; event.stopPropagation(); event.preventDefault();"
     ondragover="event.stopPropagation(); event.preventDefault();"
     ondrop="event.stopPropagation(); event.preventDefault();
     dodrop(event);">
     DROP FILES HERE FROM FINDER OR EXPLORER
</div>

<script type="text/javascript">
	function dodrop(event){
	  var dt = event.dataTransfer;
	  var files = dt.files;

	  var count = files.length;
	  output("File Count: " + count + "\n");

	    for (var i = 0; i < files.length; i++) {
	      output(typeof files[i]);
	    }
	}

	function output(text){
	  document.getElementById("output").textContent += text;
	}
</script>

</body>
</html>  
```
