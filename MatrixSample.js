var mat1 = [
				[1,2,3],
				[4,5,6],
				[7,8,9]  		];

var mat2 = [
				[5,1,3],
				[6,5,6],
				[7,7,7]  		];
var mat3 = MatrixSubtraction(mat1, mat2);
AlertMatrix(mat3);
GetColumnMatrix(mat2, 2);
//expected output => 
// [
// 		[38,32,36]
//		[92,71,84]
//		[146,110,132]
//				]
