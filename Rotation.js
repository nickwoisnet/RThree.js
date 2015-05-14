function RotateWorld2D() {
	debugger;
	var a = parseFloat(document.getElementById('RotationAlpha').value);
	var b = a;
	var c = a;
	var d = a;
	var mat1 = [
				[Math.cos(a),-Math.sin(b),0],
				[Math.sin(c),Math.cos(d),0],
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