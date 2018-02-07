/* this was some cooooool experiment

function Color() {
    document.getElementById("demo").style.color = "	#E52B50";
} 
*/

function nameChange() {
    var x = document.getElementsByClassName("English");
	for (i=0 ; i<x.length ; i++){
		x[i].innerHTML = "KEEP IT CLEAN";
	}
    
}

var Class = 'document.getElementsByClassName';
switch (Class) {
	
	case 'French':
		console.log('Si tu as une question, lever ta main. Merci pour rester en silence.');
    break;
	
	case 'English':
		console.log('Living the dream in 216')
	break;
	
	case 'Gym':
		console.log('Gym is fun');
    break;
	
	case 'Science':
		console.log('I love Nomenclature')
    break;
	
	case 'Architecture':
		console.log('No one knows a one point perspective')
		break;
	case 'Math':
		console.log('If i see a calculator I will throw it at your head')
		break;
	case 'Religion':
		console.log('Right, Right, Right, Right, Right')
		break;
	case 'History':
		console.log('BAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA')
		break;
	case 'Speech':
		console.log('Dont make faces at the presenter')
		break;
	case 'L.A.':
		console.log('BORRRIIIINNNNNGGGGG')
		break;
	case 'HomeRoom':
		console.log('BORRRRINNNNG')
		break;
	case 'Advisors':
		console.log('Talk about your feelings')
		break;
	default:
		console.log('dun nuttin to talk abouts');
}