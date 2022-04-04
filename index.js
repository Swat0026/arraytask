
	var myArray = [
	    {'Company':'Samsung', 'Model':'Galaxy', 'Memory':'64' , 'Price':'15000'},
	    {'Company':'Nokia', 'Model':'S730', 'Memory':'128' , 'Price':'22000'},
	    {'Company':'Xiomi', 'Model':'Note', 'Memory':'32' , 'Price':'12000'},
	    {'Company':'Motorola', 'Model':'G10', 'Memory':'32' , 'Price':'15000'},
	    {'Company':'Apple', 'Model':'S12', 'Memory':'64' , 'Price':'25000'},
	
	]
	
	buildTable(myArray)



	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			var row = `<tr>
							<td>${data[i].Company}</td>
							<td>${data[i].Model}</td>
							<td>${data[i].Memory}</td>
                            <td>${data[i].Price}</td>
					  </tr>`
			table.innerHTML += row


		}
	}
