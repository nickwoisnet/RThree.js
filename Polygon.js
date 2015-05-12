function Polygon (points,color) {
	var self = this;
	self.Points = points;
	self.Color = color;
	debugger;
	self.Draw = function (context) {
		context.fillStyle = self.Color;
		debugger;
		//Draw lines connecting each vertex
		for (var i = 0; i < points.length; i++) {
			if(i == points.length-1) {
				new LineSegment2D([points[i]],[points[0]],self.Color).Draw(context);
			} else {
				new LineSegment2D([points[i]],[points[i+1]],self.Color).Draw(context);
			}
		}
	}
	self.Fill = function (context) {
		context.fillStyle = self.Color;
		//take 3 pts at a time
		for (var i = 0; i < points.length; i+=3) {
			self.FillTriangle(points[i],points[i+1],points[i+2]);
		}
	}
	self.FillTriangle = function (a,b,c) {
		
	}
}