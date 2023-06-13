// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



// input would be array of stock prices 
// output would be max profit 
// would want to iterate through each stockc price
// return max profit 
// return 0 if you cant
// set max profit to 0 because there cant be a minimum to a max profit 
// use a for loop to iterate through the arrays of prices 
// inside the loop compare the current price with the current minimum price 
    // if the price is less I have to make sure the minimum price has the lowest price so far
    // if its greater, change maxProfit to difference


// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

function maxProfit(prices) {
    var maximumProfit = 0
    console.log(maximumProfit, 'maximum price line 28') // 0

    var  minPrice = prices[0]
    console.log(minPrice, "minPrice line 30") // 7

    console.log(prices.length, " price length here")
    for (let i = 1; i < prices.length; i++) {

        console.log(prices[i], 'prices[i]')
        console.log(minPrice, 'minPrice within for loop')

        if (prices[i] < minPrice) {

            console.log(minPrice, 'minPrice in mid of if statemnt') // 7 
            console.log(prices[i], 'prices within mid of if statment') // 1 

            minPrice = prices[i]

            console.log(minPrice, 'minPrice in after if statemnt') // 1 
            console.log(prices[i], 'prices within after if statment') // 1 
        }
        
       else if (prices[i] - minPrice > maximumProfit)  {

        console.log(minPrice, 'minPrice in mid of else if statemnt') 
        console.log(prices[i], 'prices mid of else if') 
        console.log(maximumProfit, 'maximumProfit mid of else if ')

        maximumProfit = prices[i] - minPrice

        console.log(minPrice, 'minPrice in after  elseif statemnt') 
        console.log(prices[i], 'prices after else if')  
        console.log(maximumProfit, 'maximumProfit after  else if')
       
       }
    }
    return maximumProfit
}
maxProfit([7,1,5,3,6,4])