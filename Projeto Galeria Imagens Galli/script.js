$(document).ready(function(){

    const baseImagens = {
        todas:['animais.jpg', 'cidade.jpg', 'natureza1.jpg'],
        animais:['animais.jpg', 'animais2.jpg', 'animais3.jpg'],
        natureza:['natureza.jpg', 'natureza1.jpg', 'natureza2.jpg'],
        cidade:['cidade.jpg', 'cidade1.jpg', 'cidade2.jpg'],

    }

    function carregaImagens(categoria){
        const imagem = baseImagens[categoria];
        const boxImagens = $('body').find('.box-imagens');
        boxImagens.empty();
        imagem.forEach(img => {
            console.log(img);
            boxImagens.append('<div class="imagem-item"><img src="imagens/'+img+'"  alt="'+img+'" /></div>')
        })
    }

    $('.botao-categoria').click(function(){
        $('body').find('.botao-categoria').removeClass('active');
        $(this).addClass('active');
        const categoria = $(this).data('categoria');
        carregaImagens(categoria);

    });
    function sortImagens(sort){
     const imagens = $('.box-imagnes .imagens-item')
     imagens.sort(function (a, b){
        const imagemA = $(a).find('img').attr('alt');
        const imagemB = $(b).find('img').attr('alt');
        //console.log(imagemA);
        if(sort == 'asc'){
        return imagemA.localeCompare(imagemB);
        }
        else{
            return imagemB.localeCompare(imagemB);  
        }
     });

     $('body').find('.box-imagens').append(imagens);
     //console.log(imagens);


    }
    

    $('body').on('click', '.botao-ordenar', function (){
       const sort = $(this).data('sort');
       sortImagens(sort);
    });
});