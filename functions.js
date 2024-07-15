
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


function Parcela(vlote, prazo, entrada, Tparcela)
{
    
    let taxa = 1.45 / 100;

    if (Tparcela === 'Anual')
    {   
        console.log("Entrou no If")
        let a = 1 + taxa;
        taxa = a ** 12 - 1;

    } 

    let valor_presente = vlote - entrada;
    
    //Calculo do valor da parcela de acordo com a tabela price
    let A = Math.pow(1 + taxa, prazo) * taxa; // Formula parcela = (1 + Taxa)
    let B = Math.pow(1 + taxa, prazo) - 1;
    let C = A / B;
    let parcela = valor_presente * C;

    return parcela
}

export 
{
    RpStr,
    InputExpected,
    Parcela
}
