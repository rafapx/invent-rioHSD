function startTest() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('social-skills-form');
    const resultSection = document.getElementById('results');
    const resultSummary = document.getElementById('result-summary');
    const profileAnalysis = document.getElementById('profile-analysis');

    // Adicione as perguntas completas do PDF aqui
    // Exemplo de perguntas
    const questions = [
        {
            id: 'comm1',
            text: 'Quando estou em uma roda de amigos:',
            options: [
                { text: 'A) Me sinto à vontade para compartilhar histórias e opiniões', value: 2 },
                { text: 'B) Falo um pouco, mas às vezes me seguro', value: 1 },
                { text: 'C) Prefiro mais ouvir do que falar', value: 0 }
            ]
        },
        {
            id: 'comm2',
            text: 'Se preciso fazer uma apresentação:',
            options: [
                { text: 'A) Encaro o desafio, mesmo com um frio na barriga', value: 2 },
                { text: 'B) Faço, mas fico bastante ansioso(a)', value: 1 },
                { text: 'C) Tento evitar ao máximo', value: 0 }
            ]
        },
        {
            id: 'comm3',
            text: 'Ao conhecer alguém novo:',
            options: [
                { text: 'A) Inicio uma conversa naturalmente', value: 2 },
                { text: 'B) Espero um pouco para me sentir mais confortável', value: 1 },
                { text: 'C) Prefiro que a outra pessoa tome a iniciativa', value: 0 }
            ]
        },
        {
            id: 'comm4',
            text: 'Durante uma conversa:',
            options: [
                { text: 'A) Consigo manter o papo fluindo com facilidade', value: 2 },
                { text: 'B) Às vezes fico sem saber o que dizer', value: 1 },
                { text: 'C) Frequentemente me pego querendo encerrar logo', value: 0 }
            ]
        },
        {
            id: 'expr1',
            text: 'Quando estou feliz:',
            options: [
                { text: 'A) Demonstro abertamente minha alegria', value: 2 },
                { text: 'B) Demonstro de forma mais contida', value: 1 },
                { text: 'C) Guardo mais para mim', value: 0 }
            ]
        },
        {
            id: 'expr2',
            text: 'Se alguém especial faz algo legal por mim:',
            options: [
                { text: 'A) Expresso minha gratidão com palavras e gestos', value: 2 },
                { text: 'B) Agradeço, mas de forma mais tímida', value: 1 },
                { text: 'C) Sinto gratidão, mas tenho dificuldade em expressar', value: 0 }
            ]
        },
        {
            id: 'expr3',
            text: 'Ao gostar romanticamente de alguém:',
            options: [
                { text: 'A) Consigo demonstrar meu interesse', value: 2 },
                { text: 'B) Demonstro indiretamente', value: 1 },
                { text: 'C) Geralmente guardo para mim', value: 0 }
            ]
        },
        {
            id: 'expr4',
            text: 'Se algo me machuca emocionalmente:',
            options: [
                { text: 'A) Consigo expressar o que estou sentindo', value: 2 },
                { text: 'B) Às vezes consigo falar sobre isso', value: 1 },
                { text: 'C) Prefiro não compartilhar', value: 0 }
            ]
        },
        {
            id: 'assert1',
            text: 'Quando algo me incomoda:',
            options: [
                { text: 'A) Consigo dizer de forma clara e respeitosa', value: 2 },
                { text: 'B) Às vezes falo, outras guardo para mim', value: 1 },
                { text: 'C) Geralmente evito mencionar', value: 0 }
            ]
        },
        {
            id: 'assert2',
            text: 'Se alguém me pede algo que não quero fazer:',
            options: [
                { text: 'A) Digo "não" educadamente', value: 2 },
                { text: 'B) Invento uma desculpa', value: 1 },
                { text: 'C) Acabo aceitando para evitar conflito', value: 0 }
            ]
        },
        {
            id: 'assert3',
            text: 'Ao perceber um erro meu:',
            options: [
                { text: 'A) Assumo e me desculpo naturalmente', value: 2 },
                { text: 'B) Reconheço, mas fico muito desconfortável', value: 1 },
                { text: 'C) Tento disfarçar ou justificar', value: 0 }
            ]
        },
        {
            id: 'assert4',
            text: 'Se discordo da opinião de alguém:',
            options: [
                { text: 'A) Expresso meu ponto de vista respeitosamente', value: 2 },
                { text: 'B) Às vezes expresso, depende da situação', value: 1 },
                { text: 'C) Prefiro ficar quieto(a)', value: 0 }
            ]
        },
        {
            id: 'empathy1',
            text: 'Quando alguém está triste:',
            options: [
                { text: 'A) Consigo oferecer apoio e conforto', value: 2 },
                { text: 'B) Quero ajudar mas nem sempre sei como', value: 1 },
                { text: 'C) Me sinto desconfortável com a situação', value: 0 }
            ]
        },
        {
            id: 'empathy2',
            text: 'Se percebo que magoei alguém:',
            options: [
                { text: 'A) Busco resolver e reparar a situação', value: 2 },
                { text: 'B) Fico mal, mas nem sempre sei como consertar', value: 1 },
                { text: 'C) Espero a poeira baixar sozinha', value: 0 }
            ]
        },
        {
            id: 'empathy3',
            text: 'Durante conversas:',
            options: [
                { text: 'A) Consigo me colocar no lugar do outro', value: 2 },
                { text: 'B) Às vezes me pego mais focado(a) em mim', value: 1 },
                { text: 'C) Tenho dificuldade em ver outros pontos de vista', value: 0 }
            ]
        },
        {
            id: 'empathy4',
            text: 'Em momentos de conflito:',
            options: [
                { text: 'A) Busco entender todos os lados', value: 2 },
                { text: 'B) Tento mediar, mas às vezes me estresso', value: 1 },
                { text: 'C) Prefiro me afastar', value: 0 }
            ]
        },
        {
            id: 'selfCtrl1',
            text: 'Em situações de estresse:',
            options: [
                { text: 'A) Geralmente mantenho a calma', value: 2 },
                { text: 'B) Fico ansioso(a) mas me controlo', value: 1 },
                { text: 'C) Tendo a me descontrolar ou paralisar', value: 0 }
            ]
        },
        {
            id: 'selfCtrl2',
            text: 'Quando recebo uma crítica:',
            options: [
                { text: 'A) Ouço e reflito sobre ela', value: 2 },
                { text: 'B) Fico chateado(a) mas tento aprender', value: 1 },
                { text: 'C) Me sinto muito mal ou na defensiva', value: 0 }
            ]
        },
        {
            id: 'selfCtrl3',
            text: 'Se algo não sai como planejado:',
            options: [
                { text: 'A) Adapto-me e busco alternativas', value: 2 },
                { text: 'B) Fico frustrado(a) mas sigo em frente', value: 1 },
                { text: 'C) Tenho dificuldade em lidar com mudanças', value: 0 }
            ]
        },
        {
            id: 'selfCtrl4',
            text: 'Em momentos de pressão:',
            options: [
                { text: 'A) Consigo manter o foco e agir', value: 2 },
                { text: 'B) Fico nervoso(a) mas tento dar conta', value: 1 },
                { text: 'C) Sinto muita ansiedade e dificuldade', value: 0 }
            ]
        }
    ];

    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.className = 'question';
        const label = document.createElement('label');
        label.setAttribute('for', q.id);
        label.textContent = `${index + 1}. ${q.text}`;
        const select = document.createElement('select');
        select.id = q.id;
        select.name = q.id;
        q.options.forEach(o => {
            const option = document.createElement('option');
            option.value = o.value;
            option.textContent = o.text;
            select.appendChild(option);
        });
        div.appendChild(label);
        div.appendChild(select);
        form.insertBefore(div, form.lastElementChild);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);

        const areaScores = {
            communication: 0,
            expression: 0,
            assertiveness: 0,
            empathy: 0,
            selfControl: 0
        };

        formData.forEach((value, key) => {
            const score = parseInt(value);
            if (key.startsWith('comm')) areaScores.communication += score;
            if (key.startsWith('expr')) areaScores.expression += score;
            if (key.startsWith('assert')) areaScores.assertiveness += score;
            if (key.startsWith('empathy')) areaScores.empathy += score;
            if (key.startsWith('selfCtrl')) areaScores.selfControl += score;
        });

        const totalScore = areaScores.communication + areaScores.expression + areaScores.assertiveness + areaScores.empathy + areaScores.selfControl;

        resultSummary.innerHTML = `<h3>Pontuação Total: ${totalScore}/80</h3>`;
        profileAnalysis.innerHTML = generateProfileAnalysis(areaScores);
        resultSection.style.display = 'block';
    });

    function generateProfileAnalysis(scores) {
        const profiles = [];
        const recommendations = [];

        if (scores.communication >= 7) {
            profiles.push('Comunicador(a) Natural');
            recommendations.push('Continue a compartilhar suas ideias e histórias!');
        } else if (scores.communication < 4) {
            recommendations.push('Trabalhe na sua comunicação, praticando conversas em grupo.');
        } else if (scores.communication < 7) {
            recommendations.push('Tente ser mais aberto(a) em compartilhar suas ideias.');
        }

        if (scores.expression >= 7) {
            profiles.push('Expressivo(a)');
            recommendations.push('Mantenha a prática de expressar seus sentimentos!');
        } else if (scores.expression < 4) {
            recommendations.push('Pratique expressar seus sentimentos em situações cotidianas.');
        } else if (scores.expression < 7) {
            recommendations.push('Tente ser mais claro(a) ao expressar o que sente.');
        }

        if (scores.assertiveness >= 7) {
            profiles.push('Diplomata');
            recommendations.push('Use sua habilidade para mediar conflitos!');
        } else if (scores.assertiveness < 4) {
            recommendations.push('Trabalhe em sua assertividade, praticando dizer “não” quando necessário.');
        } else if (scores.assertiveness < 7) {
            recommendations.push('Tente se posicionar mais em discussões.');
        }

        if (scores.empathy >= 7) {
            profiles.push('Empata');
            recommendations.push('Continue a oferecer apoio aos outros!');
        } else if (scores.empathy < 4) {
            recommendations.push('Pratique a escuta ativa, tentando entender o ponto de vista dos outros.');
        } else if (scores.empathy < 7) {
            recommendations.push('Tente se colocar no lugar dos outros em situações difíceis.');
        }

        if (scores.selfControl >= 7) {
            profiles.push('Harmonizador(a)');
            recommendations.push('Mantenha a calma em situações difíceis!');
        } else if (scores.selfControl < 4) {
            recommendations.push('Trabalhe em técnicas de relaxamento para momentos de estresse.');
        } else if (scores.selfControl < 7) {
            recommendations.push('Pratique a respiração profunda em situações desafiadoras.');
        }

        let analysis = '<h3>Perfis Identificados:</h3><ul>';
        profiles.forEach(profile => {
            analysis += `<li>${profile}</li>`;
        });
        analysis += '</ul>';

        analysis += '<h3>Recomendações:</h3><ul>';
        recommendations.forEach(rec => {
            analysis += `<li>${rec}</li>`;
        });
        analysis += '</ul>';

        analysis += `<h3>Pontuação por Área:</h3>
        <p>Comunicação: ${scores.communication}/16</p>
        <p>Expressão: ${scores.expression}/16</p>
        <p>Assertividade: ${scores.assertiveness}/16</p>
        <p>Empatia: ${scores.empathy}/16</p>
        <p>Controle de Si: ${scores.selfControl}/16</p>`;

        return analysis;
    }
});
