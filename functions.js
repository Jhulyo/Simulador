
/*function Parcela(proposta, parcela)
{
    let result = proposta / parcela

    return result.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
};*/

function RpStr(str)
{   
    let s = str.replace(".", "")
    let st = s.replace(",", ".")

    return st.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
};

function InputExpected(list)
{
    let qtd = 0;
    let index = 0;
    let notnull = []
    let result;

    for(var i = 0; i <= list.length; i++)
    {
        console.log(list[2].value)

        if(list[index].value == "")
        {
            qtd = qtd + 1;
            index += 1;
        }
        else
        {
            notnull.push(list[index])
        }
        
    }

    console.log(notnull.length)

    if(notnull.length == 9)
    {
        result = null
    }
    else
    {   
        result = window.alert(`Campo Obrigatório não Preenchido: ${qtd} campo(s)!\nOs campos Obrigatórios tem um * (ASTERISCO)!`)

        location.reload()
    }

    return result
     
}

function AnualxMensal(tparcela,prazo)
{   
    let result;
    if(tparcela === 'Anual')
    {
        result = prazo * 12;
    }
    else
    {
        result = prazo;
    }

    return result
}

function ParcelaMensal(vlote, prazo, entrada, Tparcela)
{
    let qtd = AnualxMensal(Tparcela, prazo)
    let valor_presente = vlote - entrada;
    let taxa = 1.45 / 100;
    //Calculo do valor da parcela de acordo com a tabela price
    let A = Math.pow(1 + taxa, qtd) * taxa; // Formula parcela = (1 + Taxa)
    let B = Math.pow(1 + taxa, qtd) - 1;
    let C = A / B;
    let parcela = valor_presente * C;
    
    return parcela
}

function ParcelaAnual(dadoParcela, prazo)
{
    let qtd = prazo * 12;
    let taxaAnual = 9.944747858486814724 / 100;
    let totalM = dadoParcela * qtd;
    let correcaoAnual = taxaAnual * totalM;
    let totalA = totalM + correcaoAnual;
    let result = totalA / prazo;
    console.log(dadoParcela)

    return result;
}

function Simular(Tparcela, qtdparcela, dadoParcela)    
{
    if(Tparcela === 'Anual') 
    {
        console.log('Entrou na condição anual!')
        
        let result = ParcelaAnual(dadoParcela, qtdparcela);
        return result
    }
    else
    {
        console.log('Não entrou na condição anual')
        return dadoParcela;
    }
    
};

export 
{
    RpStr,
    InputExpected,
    ParcelaMensal,
    ParcelaAnual,
    Simular
}
