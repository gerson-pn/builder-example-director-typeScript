import ConstrutorVeiculo from "./construtor/construtorVeiculo";
import DiretorAutomovel from "./diretor/diretorAutomovel";

let diretor = new DiretorAutomovel()
let construtor = new ConstrutorVeiculo()
let automovel = diretor.construir(construtor)
console.log(automovel)
