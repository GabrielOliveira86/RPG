
var btn= document.querySelector('#city2');
var esconder = document.querySelector('.esconder2');

btn.addEventListener('click', function(){

	if(esconder.style.display==='block'){
		
		esconder.style.display='none';
	}else{
		esconder.style.display='block';
	}
})
