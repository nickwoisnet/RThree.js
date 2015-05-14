function MatrixMultiplication(mat1, mat2) {
	//check if mat1 and mat2 can be multiplied together
	//Important Note: mat1 * mat2 <> mat2 * mat1
	var mat3 = [];
	for (var i = 0; i < mat1.length; i++) {
		var temp = [];
		for (var j = 0; j < mat2[0].length; j++) {
			temp.push(DotProduct(mat1[i],GetColumnMatrix(mat2,j)));
		}
		mat3.push(temp);
	}
	return mat3;
}


function GetColumnMatrix(mat, j) {
	var colMat = [];
	for (var i = 0; i < mat.length; i++) {
		colMat.push(mat[i][j]);
	}
	return colMat;
}

function DotProduct(mat1, mat2) {
	var sum = 0;
	for (var i = 0; i < mat1.length; i++) {
		sum += mat1[i] * mat2[i]
	}
	return sum;
}

function AlertMatrix(mat3) {
	for (var i = 0; i < mat3.length; i++) {
		for (var j = 0; j < mat3[i].length; j++) {
			alert('i:' + i + ' j:' + j + ' ' + mat3[i][j]);
		}
	}
}

function MatrixAddSub(u,v,f) {
	var mat = [];
	for (var i = 0; i < u.length; i++) {
		var temp = [];
		for (var j = 0; j < u[i].length; j++) {
			temp.push(f(u[i][j],v[i][j]));
		}
		mat.push(temp);
	}
	return mat;
}

function MatrixMagnitude(mat) {
	var magnitude = 0;
	for (var i = 0; i < mat.length; i++) {
		magnitude += mat[i] * mat[i];
	}
	return Math.sqrt(magnitude);
}

function MatrixUnit(mat) {
	var magnitude = MatrixMagnitude(mat[0]);
	return MatrixScalarMult(mat, (1/magnitude));
}

function MatrixScalarMult(mat,s) {
	var temp = [];
	for (var i = 0; i < mat.length; i++) {
		var row = [];
		for (var j = 0; j < mat[i].length; j++) {
			row.push(parseFloat(mat[i][j] * s));
		}
		temp.push(row);
	}
	return temp;
}