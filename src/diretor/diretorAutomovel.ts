import Construtor from "../construtor/construtor";
import ConstrutorVeiculo from "../construtor/construtorVeiculo";
import Veiculo from "../modelo/veiculo";
import Diretor from "./diretor";

export default class DiretorAutomovel implements Diretor {
    construir(construtor: Construtor): Veiculo {
        let constructorAutomovel = construtor as ConstrutorVeiculo
        constructorAutomovel.setRefrigeracao(Refrigeracao.SemRefrigeracao)
        constructorAutomovel.setCategoria(Categoria.Particular)
        constructorAutomovel.setEspecie(Especie.Passageiro)
        constructorAutomovel.setCarroceria(Carroceria.CabineSimples)
        constructorAutomovel.setFreio(Freio.ABS)
        constructorAutomovel.setTipo(Tipo.Automovel)
        constructorAutomovel.setNumeroPassageiros(5)
        constructorAutomovel.setCombustivel(Combustivel.Bicombustivel)
        return constructorAutomovel.obterObjeto();
    }
}

