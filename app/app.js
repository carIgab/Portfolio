function change_color(){
    // função para mudança de tema
    let body_html = document.body.classList
    body_html.toggle('dark')
}

function push_course(){
    // função para inserir todos os cursos dentro do data_course
    const data = data_course;

    let content_html = ""

    // passa todos os elementos dentro do arquivo data_course e escreve o codigo do card
    data.forEach(element => {
        content_html += `<li class="card_formation">` +
                    `<div class="front_card_formation content_card_formation"><div class="title_card"><h2>${element.name}</h2></div></div>`+
                    '<div class="back_card_formation content_card_formation">'+
                        `<div class="title_card_back content_card"><h2>${element.name}</h2></div>`+
                        `<h3 class="content_card">Local: ${element.local_curso}</h3>`+
                        `<h3 class="content_card">Area: ${element.area}</h3>`+
                        `<h3 class="content_card">Carga Horaria: ${element.carga_horaria}</h3>`+
                        `<input type="button" value="Certificado" onclick="open_link('${element.link}')"></input></div>`+
                '</li>'
       
    });

    // colocar o codigo do card no html
    document.querySelector('.list_course').innerHTML = content_html
}

function push_projects(){
    // função para inserir todos os projetos
    const data = data_projects

    let content_html = ""
    

    // passa por todos elementos dentro data_projects
    for(let i =0; data.length > i; i++){
        let list_language = ""

        // passa por todos os todos elementos do language de todos elementos data_projects
        for(let y=0; data[i].languague.length > y; y++){
            list_language +='<li class="language_card">'+data[i].languague[y]+'</li>'
        }

        content_html += `<li class="card_project">` +
                    `<div class="front_card_project content_card_project"><div class="title_card"><h2>${data[i].name}</h2></div></div>`+
                    '<div class="back_card_project content_card_project">'+
                        `<div class="title_card_back content_card"><h2>${data[i].name}</h2></div>`+
                        `<section class="camp_list_language content_card"><h3>Linguagens:</h3><ul class="list_card_language">`+
                        `${list_language}</ul></section>`+
                        `<input type="button" value="Link repositorio" onclick="open_link('${data[i].link}')"></input></div>`+
                '</li>'
    }

    // inserir o codigo do card do html
    document.querySelector('.camp_projects').innerHTML = content_html
}

function open_link(link){ 
    // abrir uma nova aba no navegador
    window.open(link, '_blank');
}

function filter_search() {
    // função de filtro de pesquisa, que pega o valor do input de pesquisa
    let filter = document.querySelector('#input_search').value.toLowerCase();

    // pega dos elementos do class card_project
    let cards = document.getElementsByClassName('card_project');
    for (let i=0; cards.length > i;i++){
        // pega o texto do elemento
        let conteudo = cards[i].textContent.toLowerCase();

        // aparece ou esconde elemento
        if (conteudo.includes(filter)) {
            cards[i].style.display = 'flex'; 
        } else {
            cards[i].style.display = 'none';
        }
    }
}

function filter_select() {
    // função de filtro de select, que pega o valor do select 
    let filter = document.querySelector('#filter_select_portfolio').value.toLowerCase();

    // pega dos elementos do class card_project
    let cards = document.getElementsByClassName('card_project');
    for (let i=0; cards.length > i;i++){
        // pega o texto do elemento
        let conteudo = cards[i].textContent.toLowerCase();

        // aparece ou esconde elemento
        if (conteudo.includes(filter)) {
            cards[i].style.display = 'flex'; 
        } else {

            cards[i].style.display = 'none';
        }
    }
}