const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')




const convertValues = async () => {
    const inputReais = document.getElementById('input-real').value
    const realvaluetext =document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    
    
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    realvaluetext.innerHTML=inputReais
   
    realvaluetext.innerHTML= new Intl.NumberFormat("pt-BR", {
        style : "currency",
        currency : "BRL",
    }).format( inputReais )
if (select.value === "US$ Dólar americano"){
    currencyValueText.innerHTML= new Intl.NumberFormat("en-US", {
        style : "currency",
        currency : "USD",
    }).format( inputReais / dolar )
}

if (select.value === "€ Euro"){
    currencyValueText.innerHTML= new Intl.NumberFormat("de-DE", {
        style : "currency",
        currency : "EUR",
    }).format( inputReais / euro )
}

if (select.value === "Bitcoin"){
    currencyValueText.innerHTML= new Intl.NumberFormat("de-DE", {
        style : "currency",
        currency : "BTC",
    }).format( inputReais / bitcoin )

}


}


const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyimg = document.getElementById('currency-img')
    const currencyValue = document.getElementById("currency-value-text")

    if (select.value === '€ Euro'){
        currencyName.innerHTML ='Euro'
        currencyimg.src="../assets/Euro.jpg"
    }

    if (select.value === 'US$ Dólar americano'){
        currencyName.innerHTML ='Dólar americano'
        currencyimg.src="../assets/estados-unidos.png"
    }

    if (select.value === 'Bitcoin'){
        currencyName.innerHTML ="Bitcoin"
        currencyimg.src="../assets/bitcoin.png"
        currencyValue.innerHTML = "0.1"
    }

    convertValues()
}


button.addEventListener("click",convertValues )
select.addEventListener("change",changeCurrency)

