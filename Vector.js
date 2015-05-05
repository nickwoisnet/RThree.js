// Nicholas Woisnet
// 5/4/2015
// Simple Vector
function Vector (i, j, k) {
	var self = this;
	self.i = i;
	self.j = j;
	self.k = k;
	self.Magnitude = function () {
		return Math.sqrt(self.i*self.i + self.j*self.j + self.k*self.k);
	}
}

function DotProduct(u,v) {

}

function CrossProduct(u,v) {

}

function VectorAddition(u,v) {
	
}