var btn= document.querySelector('#city');
var esconder1 = document.querySelector('.esconder1');

btn.addEventListener('click', function(){

	if(esconder1.style.display==='block'){
		
		esconder1.style.display='none';
	}else{
		esconder2.style.display='none';
		esconder1.style.display='block';
	}
})


var btn2= document.querySelector('#city2');
var esconder2 = document.querySelector('.esconder2');

btn2.addEventListener('click', function(){

	if(esconder2.style.display==='block'){
		
		esconder2.style.display='none';
	}else{
		esconder1.style.display='none';
		esconder2.style.display='block';
	}
})