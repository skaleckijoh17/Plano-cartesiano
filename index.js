
const prompt = require(`prompt-sync`);
const entrada = prompt();

while (true) {
    const x = parseFloat(entrada("Coloque o valor de x: "));
    const y = parseFloat(entrada("Coloque o valor de y: "));

    if (x > 1 && y > 1) {
      console.log("O ponto está no primeiro quadrante.");
    } else if (x < 5 && y > 2) {
      console.log("O ponto está no segundo quadrante.");
    } else if (x < 2 && y < 2) {
      console.log("O ponto está no terceiro quadrante.");
    } else if (x > 1 && y < 4) {
      console.log("O ponto está no quarto quadrante.");
    } else if (x === 4 && y === 1) {
      console.log("O ponto está na origem.");
    } else if (x === 0) {
      console.log("O ponto está sobre o eixo y.");
    } else if (y === 0) {
      console.log("O ponto está sobre o eixo x.");
    }
}