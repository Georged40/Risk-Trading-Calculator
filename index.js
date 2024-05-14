const { color } = require("html2canvas/dist/types/css/types/color")






 

    function checkRisk(){

        

    const tradedPair = document.getElementById("currencyPairs").value
    const lotSize = document.getElementById("lotSize").value
    const entryPrice = document.getElementById("entryPrice").value
    const lossExit = document.getElementById("lossLevel").value
    const profitExit = document.getElementById("profitLevel").value
    document.getElementById("optionHolder").style.backgroundColor="red";
    

    let pipCost
    let negativeMove = entryPrice - lossExit
    let positiveMove = profitExit - entryPrice
    let potentialLoss 
    let potentialProfit
    
    
        

    const nasCost = 0.01828
    const eurusdCost = 0.189
    const eurjpyCost = 0.189
    const goldCost = 18.31
    const gbpjpyCost = 12.30
    const gbpusdCost = 18.80
    const bitcoinCost = 0.1887
    const oilCost = 189.67
    const tradingVolume = lotSize * 100

    
    
    
    
        if(tradedPair === "NASDAQ"){
            pipCost = nasCost
            potentialLoss = pipCost * negativeMove* tradingVolume
            potentialProfit = pipCost * positiveMove * tradingVolume
            document.getElementById("nasdaq").style.backgroundColor="red";
        }else if(tradedPair === "EURUSD"){
            pipCost = eurusdCost
            potentialLoss = pipCost * negativeMove * tradingVolume
            potentialProfit = pipCost * positiveMove * tradingVolume
        }else   if(tradedPair === "EURJPY"){
            pipCost = eurjpyCost
            potentialLoss = pipCost * negativeMove * tradingVolume
            potentialProfit = pipCost * positiveMove * tradingVolume
        }else if(tradedPair === "GOLD"){
            pipCost = goldCost
            potentialLoss = pipCost * negativeMove * tradingVolume
            potentialProfit = pipCost * positiveMove * tradingVolume
        }else if(tradedPair === "GBPJPY"){
            pipCost = gbpjpyCost
            potentialLoss = pipCost * negativeMove * tradingVolume
            potentialProfit = pipCost * positiveMove * tradingVolume
        }else if(tradedPair === "GBPUSD"){
            pipCost = gbpusdCost
            potentialLoss = pipCost * negativeMove * tradingVolume
            potentialProfit = pipCost * positiveMove * tradingVolume
        }else if(tradedPair === "BITCOIN"){
            pipCost = bitcoinCost
            potentialLoss = pipCost * negativeMove * tradingVolume
            potentialProfit = pipCost * positiveMove * tradingVolume
        }else if(tradedPair === "CRUDE OIL"){
            pipCost = oilCost
            potentialLoss = pipCost * negativeMove * tradingVolume
            potentialProfit = pipCost * positiveMove * tradingVolume
        }else{
            console.log("Not a monitored pair")
        }
    
       

        document.getElementById("loss").innerText = potentialLoss.toFixed(2)
        document.getElementById("profit").innerText = potentialProfit.toFixed(2)
       

    
    }

    document.getElementById("calculateButton").addEventListener("click")

   
   
   // document.getElementById("testing")
   // document.getElementById("tradedPairPair").innerText = tradedPairPair
   // document.getElementById("entryPrice").innerText = currentPrice
   // document.getElementById("stopLoss").innerText = stopLoss
   // document.getElementById("takeProfit").innerText = takeProfit
   // document.getElementById("profit").innerText = potentialProfit.toFixed(2)
   // document.getElementById("loss").innerText = potentialLoss.toFixed(2)
   // document.getElementById("Lot-size").innerText = tradeVolume.toFixed(2)



//tradeCost(1000,"gold",1736020,1733000,1755006)




// function tradeCost(direction,tradedPairPair, currentPrice, stopLoss, takeProfit){
//     document.getElementById("testing")
//     document.getElementById("tradedPairPair").innerText = tradedPairPair
//    document.getElementById("entryPrice").innerText = currentPrice
   
    
    
//     let pipCost
//     let negativeMove = currentPrice - stopLoss
//     let positiveMove = takeProfit - currentPrice
//     let potentialLoss 
//     let potentialProfit 
  
//     const direction = direction
//     const tradedPair = tradedPairPair.toLowerCase()
//     const nasCost = 0.01828
//     const cadCost = 0.1246
//     const audcost = 0.1842
//     const goldCost = 0.1831
//     const audCadCost = 0.1305
    
//     if(direction.toLowerCase === "buy" && tradedPair === "nasdaq"){
//             pipCost = nasCost
//             potentialLoss = pipCost * negativeMove
//             potentialProfit = pipCost * positiveMove
//         }else if(direction.toLowerCase === "sell" && tradedPair === "nasdaq"){
//             pipCost = nasCost
//             potentialLoss = pipCost * positiveMove
//             potentialProfit = pipCost * negativeMove
//         }else if(direction.toLowerCase === "buy" && tradedPair === "cadjpy"){
//             pipCost = cadCost
//             potentialLoss = pipCost * positiveMove
//            potentialProfit = pipCost * negativeMove
//         }else if(direction.toLowerCase === "sell" && tradedPair === "cadjpy"){
//             pipCost = cadCost
//             potentialLoss = pipCost * negativeMove
//            potentialProfit = pipCost * positiveMove
//         }else if(direction.toLowerCase === "buy" && tradedPair === "audjpy"){
//             pipCost = audcost
//              potentialLoss = pipCost * positiveMove
//              potentialProfit = pipCost * negativeMove
//         }else if(direction.toLowerCase === "sell" && tradedPair === "audjpy"){
//             pipCost = audcost
//              potentialLoss = pipCost * negativeMove
//              potentialProfit = pipCost * positiveMove
//         }else if(direction.toLowerCase === "buy" && tradedPair === "audcad"){
//             pipCost = audCadCost
//             potentialLoss = pipCost * positiveMove
//             potentialProfit = pipCost * negativeMove
//         }else if(direction.toLowerCase === "sell" && tradedPair === "audcad"){
//             pipCost = audCadCost
//             potentialLoss = pipCost * negativeMove
//             potentialProfit = pipCost * positiveMove
//         }else if(direction.toLowerCase === "buy" && tradedPair === "gold"){
//             pipCost = goldCost
//             potentialLoss = pipCost * positiveMove
//             potentialProfit = pipCost * negativeMove
//         }else if(direction.toLowerCase === "buy" && tradedPair === "gold"){
//             pipCost = goldCost
//             potentialLoss = pipCost * negativeMove
//             potentialProfit = pipCost * positiveMove
//         }else{
//             prompt('Non existing trade')
            
//         }
//         document.getElementById("profit").innerText = 20200000
//         document.getElementById("loss").innerText = potentialLoss.toFixed(2)
//         document.getElementById("direction").innerText = direction

//     }

// tradeCost("sell", "nasdaq", 1143810,1140000,1147258)

        

    

    


