function LineSegment2D (s,e,c) {
	debugger;
	var self = this;
	self.unitMat = MatrixUnit(s,e);
	self.start = s;
	self.end = e;
	self.color = c;
	self.Draw = function (context) {
		context.fillStyle = self.Color;
		// p' = p + unitMat * t
		//convention needed: s < e
		var p = self.start;
		var c = 0;
		debugger;
		while(p[0][0] < e[0][0]) {
			p = MatrixAddSub(self.start,MatrixScalarMult(self.unitMat,c++),function(x,y) {return x + y;});
			context.fillRect(p[0][0],p[0][1],1,1);
		}
	}
}