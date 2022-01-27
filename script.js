function sortear(){
			
	let n1 = document.getElementById('minimo');
	let n2 = document.getElementById('maximo');

	let min = Math.floor(n1.value);
	let max = Math.floor(n2.value);

	let resultado = Math.floor(Math.random() * (max - min + 1)) + min;
	
	document.getElementById('numero').innerHTML = "Vencedor: "+resultado;
}