function ScaleWorld2D() {
	debugger;
	var a = parseFloat(document.getElementById('ScaleA').value);
	var b = parseFloat(document.getElementById('ScaleB').value);
	var mat1 = [
				[a,0,0],
				[0,b,0],
				[0,0,1]  		];
	for (var i = 0; i < Elements.length; i++) {
		for (var j = 0; j < Elements[i].Points.length; j++) {
				var e1 = [Elements[i].Points[j].pop()];
				var e2 = [Elements[i].Points[j].pop()];
				Elements[i].Points[j].push(e2);
				Elements[i].Points[j].push(e1);
				Elements[i].Points[j].push([1]);
				Elements[i].Points[j] = MatrixMultiplication(mat1, Elements[i].Points[j]);
				Elements[i].Points[j].pop();
				e1 = Elements[i].Points[j].pop().pop();
				e2 = Elements[i].Points[j].pop().pop();
				Elements[i].Points[j].push(e2);
				Elements[i].Points[j].push(e1);

			}
	}
	DrawWorld();
}