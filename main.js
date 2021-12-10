function idiomas(valor) {   
    const campoDiasSemana = document.getElementById('campoDiasSemana');
    const campoDiasSemanaIng = document.getElementById('campoDiasSemanaIng');

    if(valor === 'ingles'){
        campoDiasSemana.style.display = "none";
        campoDiasSemanaIng.style.display = "block";
    }else{
        campoDiasSemana.style.display = "block";
        campoDiasSemanaIng.style.display = "none";
    }
        
} 

function diasSemana(valor) {
    let conteudo = ""; 

    switch(valor) {
        case'segunda':
        conteudo = `
        <h4>Monday (segunda-feira)</h4>
        <p>'Monday' recebe seu nome por conta da Lua. Sabendo que Lua em inglês é 'moon',
        logo compreendemos: 'Moon Day'. Este dia empresta seu nome à expressão 'Monday blues',
        que se relaciona com aquele sentimento de desânimo ligado ao início de uma nova semana.</p>`
        break;

        case'terca':
        conteudo = `
        <h4>Tuesday (terça-feira)</h4>
        <p>Marte foi o planeta escolhido para este dia. Para os romanos, 
        Marte representava o deus da Guerra e para os nórdicos, 
        o deus da guerra correspondente era Tyr, o qual assume o nome de 'Tuesday'.
        As línguas com origem românica, como espanhol, francês e italiano, apresentam nomes bastante similares para terça-feira,
        já que a inspiração é a mesma (martes, mardi e martedi).</p>`
        break;

        case 'quarta':
        conteudo = `
        <h4>Wednesday (quarta-feira)</h4>
        <p>Quarta-feira é sinônimo de confusão no inglês,
        uma vez que sua pronúncia parece despertar dificuldade e estranhamento
        até em nativos. A mitologia Nórdica aparece mais uma vez nos nomes dos dias da semana,
        sua presença sendo ilustrada por Odin, o deus da sabedoria,
        que também era ocasionalmente chamado de Woden. Na França,
        por exemplo, esse dia da semana é conhecido como mercredi
        graças a Mercúrio, o Deus romano da inteligência.
        E sim: ele está diretamente associado a Odin!</p>`
        break;

        case 'quinta':
        conteudo = `
        <h4>Thursday (quinta-feira)</h4>
        <p> Com o final de semana no horizonte, temos a quinta-feira, ou 'Thursday',
        o dia do Thor. Sim, aquele com o cabelão e o 
        martelo! Thor é conhecido como o deus do trovão ('thunder') na mitologia Nórdica,
        e influenciou diretamente o nome deste dia – em dinamarquês, por exemplo,
        quinta-feira é Torsdag e, em finlandês, Torstai.
        </p>`
        break;

        case 'sexta':
        conteudo = ` 
        <h4>Friday (sexta-feira)</h4>
        <p> A sexta-feira recebe o nome de 'Friday' em inglês por conta da deusa Nórdica Frigg, que é associada com o casamento e o amor, embora Freyja, outra deusa importantíssima do panteão nórdico, seja ainda mais associada com o amor. Há hipóteses que sustentam que os dois mitos tenham uma origem em comum. Já na cultura latina, sexta-feira é conhecida como “dies veneris”, ou o "dia de Vênus", a deusa romana do am</p>
        `
        break;


        case "sabado": 
        conteudo = `
        <h4>Saturday (sábado)</h4>
        <p>Uma homenagem ao deus romano Saturno, que também é o planeta</p>`
        break;

        case "domingo":
        conteudo =`
        <h4>Sunday (domingo)</h4>
        <p>Uma homenagem ao deus romano Sun que significa sol em Inglês</p>`
        break;
    }

    const descricao = document.getElementById('descricao');

    descricao.innerHTML = conteudo;
    descricao.style.display = "block";

}

function diasSemanaIngles(valor){
    diasSemana(valor);
}