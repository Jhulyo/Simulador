
import * as f from './functions.js';
const d = document;// objeto document


let fieldset = d.getElementById('fieldsetA');// objeto para coloar inserir table

// Objetos de botões
const Btgerar = document.getElementById('btgerar');
const Btclear = document.getElementById('btclear');
const Btprint = document.getElementById('btprint');
///

let bts = d.getElementById('bts')

Btgerar.onclick = function ()
{

    //Get valores de inputs
    let tipoParcela = document.querySelector("input[name='tipoParcela']:checked");
    let qtdparcela = d.getElementById('Qtdparcela')
    let Ventrada = d.getElementById('Ventrada');
    let Vlote = d.getElementById('Vlote');
    let lote = d.getElementById('lote');
    let quadra = d.getElementById('quadra');
    let nome = d.getElementById('nome');
    let telefone = d.getElementById('telefone');
    ///

    // Lista de entrada para validação de campos
    let listobjects = [lote, nome, telefone, Vlote, Ventrada, tipoParcela, qtdparcela, quadra]
    ///

    // Preparando variáveis
    let vlote = parseFloat(f.RpStr(Vlote.value));  // Valor do lote
    let ventrada = parseFloat(f.RpStr(Ventrada.value));  // Valor de entrada
    let Vfinanciado = vlote - ventrada;  //Valor financiado 
    let dadoParcela = f.Parcela(vlote, qtdparcela.value, ventrada, tipoParcela.value)  // Retorna valor da parcela
    //let Valor_parcela = f.Simular(tipoParcela.value, qtdparcela.value, dadoParcela)  //Rertorna o valor real da parcela
    let valorParcela = dadoParcela.toFixed(2);
    let Tparcela = parseFloat(valorParcela) * qtdparcela.value;
    ////

    // Convertendo em STR para visualização do usuário
    let tlote = vlote.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    let entrada = ventrada.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    let financiado = Vfinanciado.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    let valParcela = valorParcela.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    let Saldo = valorParcela * qtdparcela.value + ventrada;
    let saldo = Saldo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    let tparcela = Tparcela.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    ///

    f.InputExpected(listobjects) // Metodo de validação de inputs com o parametro da lista criada anteriormente.

    let table = `<legend><b>Condições Proposta</b></legend> 
    <div>
    <style>
    table{
        width: 100%;
        border-collapse: collapse;
        text-align: center;
    }
    td{
        border: 1px solid black;
        padding: 8px;
    }   
    </style>
    <table>
    <tr>
        <td>Valor do Lote</td>
        <td>${tlote}</td>
    <tr>
    </table>
    <br><br>
    <table>
    <tr>
        <td></td>
        <td>Quantidade</td>
        <td>Valor</td>
        <td></td>
    </tr>
    <tr>
        <td>Entrada</td>
        <td>1</td>
        <td>${entrada}</td>
        <td>Total Parcelas</td>
    </tr>
    <tr>
        <td>${tipoParcela.value}</td>
        <td>${qtdparcela.value}</td>
        <td>${valParcela}</td>
        <td>${tparcela}</td>
    </tr>
    </table>
    <br><br>
    <table>
    <tr>
        <td>Saldo Total</td>
        <td>${saldo}</td>        
    </tr>
    </table>
    </div>`;// novo html para criar tabela na pagina intex.html

    fieldset.style.textAlign = "left";
    fieldset.innerHTML = table;
    console.log(dadoParcela)

};


Btclear.onclick = function() 
{
    let qtdparcela = d.getElementById('Qtdparcela');
    let Ventrada = d.getElementById('Ventrada');
    let Vlote = d.getElementById('Vlote');

    qtdparcela.value = null;
    Ventrada.value = null;
    Vlote.value = null;
};

Btprint.onclick = function () 
{
    let nome = d.getElementById('nome');
    let telefone = d.getElementById('telefone');

    bts.innerHTML = `<br>`;
    window.scrollTo(0, 0)
    window.print();
    window.location.reload();

}
