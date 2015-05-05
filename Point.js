// Nicholas Woisnet
// 5/4/2015
// Simple Point
function Point (X,Y,Z,Color) {
	var self = this;
	self.X = X;
	self.Y = Y;
	self.Z = Z;
	self.Color = Color;
	self.Draw = function (context) {
		context.fillStyle = self.Color;
		context.fillRect(self.X,self.Y,1,1);
	}
}