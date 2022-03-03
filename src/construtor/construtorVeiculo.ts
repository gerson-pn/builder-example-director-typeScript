import Construtor from "./construtor";

export default class ConstrutorVeiculo implements Construtor {
    private veiculo!: Veiculo;
    constructor() {
        this.reset()
    }
    public setFabricante(fabricante: Fabricante) {
        this.veiculo.fabricante = fabricante
    }
    public setTipo(tipo: Tipo) {
        this.veiculo.tipo = tipo
    }
    public setEspecie(especie: Especie) {
        this.veiculo.especie = especie
    }
    public setCategoria(categoria: Categoria) {
        this.veiculo.categoria = categoria
    }
    public setCarroceria(carroceria: Carroceria) {
        this.veiculo.carroceria = carroceria
    }
    public setCombustivel(combustivel: Combustivel) {
        this.veiculo.combustivel = combustivel
    }
    public setFreio(freio: Freio) {
        this.veiculo.freio = freio
    }
    public setNumeroPassageiros(numeroPassageiros: number) {
        this.veiculo.numeroPassageiros = numeroPassageiros
    }
    public setRefrigeracao(refrigeracao: Refrigeracao) {
        this.veiculo.refrigeracao = refrigeracao
    }
    reset(): void {
        this.veiculo = new Veiculo()
    }
    obterObjeto() {
        return this.veiculo
    }
}