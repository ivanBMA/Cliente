console.log("");

    
    setTimeout(() => {
        console.log("Comienzo");
        
        setTimeout(() => {

            var newItem = document.createElement('li');
            newItem.textContent = 'Lista 3 - New Item';
            var body = document.body;
            var thirdList = body.getElementsByTagName('ul')[2];
            thirdList.appendChild(newItem);

            setTimeout(() => {
                var newUl = document.createElement('ul');
                var newItem1 = document.createElement('li');
                newItem1.textContent = 'New Lista - Item 1';
                var newItem2 = document.createElement('li');
                newItem2.textContent = 'New Lista - Item 2';
                var newItem3 = document.createElement('li');
                newItem3.textContent = 'New Lista - Item 3';
                newUl.appendChild(newItem1);
                newUl.appendChild(newItem2);
                newUl.appendChild(newItem3);
                var body = document.body;
                var secondLista = body.querySelectorAll('ul')[1];
                body.insertBefore(newUl, secondLista.nextElementSibling);
            }, 1000);
            
        }, 3000);
        
    }, 1000);

