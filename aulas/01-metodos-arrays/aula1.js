const equipes = ['Real Madrid', 'Liverpool', 'Chelsea', 'Barcelona', 'Inter'];
const precos = [10, 90, 120, 5];

equipes.push('Bayern');                // Adiciona 'Bayern' ao final do array
const time = equipes.pop();            // Remove e retorna o último item do array
equipes.shift();                       // Remove o primeiro item do array
equipes.unshift();                     // (sem argumento) Não faz nada aqui
equipes.splice(0, 2);                  // Remove 2 itens a partir da posição 0
equipes.splice(2, 0, "Bayern");        // Adiciona 'Bayern' na posição 2 sem remover nada
equipes.splice(2, 1, "Bayern");        // Substitui 1 item na posição 2 por 'Bayern'
equipes.reverse();                     // Inverte a ordem dos itens do array
equipes.sort();                        // Ordena os itens em ordem alfabética
const chelseIn = equipes.includes('Chelsea');   // Verifica se 'Chelsea' está no array
const chelseaIndex = equipes.indexOf('Chelsea'); // Retorna a posição de 'Chelsea' no array

const equipes2 = equipes.slice(1, 4);  // Cria novo array com itens da posição 1 até antes da 4

const novasEquipes = equipes.join('-'); // Junta os itens do array com "-" entre eles

precos.sort((a, b) => a - b);           // Ordena os preços em ordem crescente (numérica)

console.log(equipes);                   // Mostra o array 'equipes' no console
console.log(precos);                    // Mostra o array 'precos' no console