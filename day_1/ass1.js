// we need to find grades by useing marks
//0-40  Grade D
//40-60 C
// 60 -80 B
// 80+ A

var marks = 65
if (marks>0 && marks <40)
console.log('D grade')
else if (marks>=40 && marks <60)
console.log('C grade')
else if (marks>=60 && marks <80)
console.log('B grade')
else if (marks>=80)
console.log('A grade')