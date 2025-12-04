	 function amount() {
		 
		if (document.getElementById("curr").value == "South African Rands") {
			const conv = document.getElementById("amount").value;
			let aconv = conv / 17.09;
			aconv == aconv.toFixed(2);
			document.getElementById("output1").textContent = `R ${conv} \= \$${aconv}`;
			let bconv = conv / 19.93;
			bconv == bconv.toFixed(2);
			document.getElementById("output2").textContent = `R ${conv} \= \€${bconv}`;
		}
		
		else if (document.getElementById("curr").value == "United States Dollars") {
			const conv = document.getElementById("amount").value;
			let aconv = conv * 0.86;
			aconv == aconv.toFixed(2);
			document.getElementById("output1").textContent = `$${conv} \= \€${aconv}`;
			let bconv = conv * 17.07;
			bconv == bconv.toFixed(2);
			document.getElementById("output2").textContent = `$${conv} \= R${bconv}`;
		}
		
		else if (document.getElementById("curr").value == "Euros") {
			const conv = document.getElementById("amount").value;
			let aconv = conv * 19.92;
			aconv == aconv.toFixed(2);
			document.getElementById("output1").textContent = `€${conv} \= \R${aconv}`;
			let bconv = conv * 1.17;
			bconv == bconv.toFixed(2);
			document.getElementById("output2").textContent = `€${conv} \= \$${bconv}`;
		}
	 }
	
