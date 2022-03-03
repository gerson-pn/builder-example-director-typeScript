import Construtor from "../construtor/construtor";

export default interface Diretor {
    construir(construtor: Construtor): Veiculo
}