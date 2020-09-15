const rentParent = document.querySelector('.rent__parent'),
      products = document.querySelectorAll('.products__item'),
      productsName = document.querySelectorAll('.products__title'),
      productsSubtitle = document.querySelectorAll('.products__subtitle'),
      pepelane = document.querySelector('.pepelane__name'),
      content = document.querySelector('.content');

      for(let i = 0; i < products.length && i < productsName.length && i < productsSubtitle.length; i++){
        products[i].addEventListener('click', (event) => {
            const target = event.target;
            if(target == products[i] || target == productsName[i] || target == productsSubtitle[i]){
                openContent();
            }
        });
    }
    function openContent() {
        rentParent.classList.remove('show');
        rentParent.classList.add('hide');
        content.classList.remove('hide');
        content.classList.add('show');
    }
    pepelane.addEventListener('click', (e) => {
        const target = e.target;
        if(target == pepelane){
            window.location.href = 'index.html';
        }
    });

