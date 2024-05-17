let totalEarnings = 0
const monthlySavings = (payments, livingCost) => {
    for(let i = 0; i < payments.length; i++) {
        totalEarnings += payments[i]
    }

    for(let i = 0; i < payments.length; i++) {
        if(payments[i] >= 3000) {
            totalEarnings -= payments[i] * (20/100)
        }
    }

    totalEarnings -= livingCost
    if(totalEarnings >= 0){
        console.log("Total Savings: ", totalEarnings)
    }
    else {
        console.log("Earn More")
    }
}

monthlySavings([200, 4000, 1500, 400, 900], 6200)