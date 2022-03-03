import Construtor from "../construtor/construtor";
import ConstrutorVeiculo from "../construtor/construtorVeiculo";
import Diretor from "./diretor";

export default class DiretorMotocicleta implements Diretor {
    construir(construtor: Construtor): Veiculo {
        let constructorMotocicleta = construtor as ConstrutorVeiculo
        constructorMotocicleta.setRefrigeracao(Refrigeracao.SemRefrigeracao)
        constructorMotocicleta.setCategoria(Categoria.Particular)
        constructorMotocicleta.setEspecie(Especie.Passageiro)
        constructorMotocicleta.setCarroceria(Carroceria.SemCabine)
        constructorMotocicleta.setFreio(Freio.ABS)
        constructorMotocicleta.setTipo(Tipo.Motocicleta)
        constructorMotocicleta.setNumeroPassageiros(2)
        constructorMotocicleta.setCombustivel(Combustivel.Bicombustivel)
        return constructorMotocicleta.obterObjeto();
    }
}