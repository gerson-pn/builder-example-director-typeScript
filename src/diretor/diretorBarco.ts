import Construtor from "../construtor/construtor";
import ConstrutorVeiculo from "../construtor/construtorVeiculo";
import Diretor from "./diretor";

export default class DiretorBarco implements Diretor {
    construir(construtor: Construtor): Veiculo {
        let constructorBarco = construtor as ConstrutorVeiculo
        constructorBarco.setRefrigeracao(Refrigeracao.SemRefrigeracao)
        constructorBarco.setCategoria(Categoria.Aluguel)
        constructorBarco.setEspecie(Especie.Carga)
        constructorBarco.setCarroceria(Carroceria.SemCabine)
        constructorBarco.setFreio(Freio.SemFreio)
        constructorBarco.setTipo(Tipo.Barco)
        constructorBarco.setNumeroPassageiros(20)
        constructorBarco.setCombustivel(Combustivel.Diesel)
        return constructorBarco.obterObjeto();
    }
}

