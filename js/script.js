    let varHumeur = 0;
    let nouveauMessage = {
        nomPrénom: '',
        humeur: '',
        entreprise: '',
        avisSF: '',
        engagement: '',
    }

    let tableau = localStorage.getItem("tableau");


    if(tableau === null){
		tableau = [];
	}
    else{
		tableau = JSON.parse(tableau);
	}

    function sauvegarderMessage()
    {
		console.log("appel");
        nouveauMessage.nomPrénom = document.getElementById("pseudo").value;
        nouveauMessage.entreprise = document.getElementById("entreprise").value;
        nouveauMessage.humeur = varHumeur;
        nouveauMessage.avisSF = document.getElementById("avisSF").value;
        nouveauMessage.engagement = document.getElementById("engagement").value;
        tableau.push(nouveauMessage); 
        //console.log(localStorage.getItem(tableau));
        localStorage.setItem("tableau",JSON.stringify(tableau));
    }
    
    function sad()
    {
        let x = document.getElementById('sad');
        x.src='./images/sad2.png';
        let y = document.getElementById('happy');
        y.src='./images/imagesHappy.png';
        let z = document.getElementById('veryHappy');
        z.src='./images/imagesVeryHappy.png';
        varHumeur = 1;
    }

    function happy()
    {
        let x = document.getElementById('sad');
        x.src='./images/imagesSad.png';
        let y = document.getElementById('happy');
        y.src='./images/happy2.png';
        let z = document.getElementById('veryHappy');
        z.src='./images/imagesVeryHappy.png';
        console.log(y.src);
        varHumeur = 2;
    }

    function veryHappy()
    {
        let x = document.getElementById('sad');
        x.src='./images/imagesSad.png';
        let y = document.getElementById('happy');
        y.src='./images/imagesHappy.png';
        let z = document.getElementById('veryHappy');
        z.src='./images/veryHappy2.png';
        varHumeur = 3;
    }
