

document.getElementById('clac-btn').addEventListener('click', function(){
    
    const foodValue = bringElement('food');
    const rentValue = bringElement('rent');
    const clothValue = bringElement('clothes');
    const totalValues = foodValue + rentValue + clothValue;
    // console.log(totalValues)

    const expenseElement = setElementInner('total-Expense', totalValues)

    const incomeFigure = bringElement("total-income");
    const totalIncome = incomeFigure - totalValues;
    const showTotalBalance = setElementInner('total-balance', totalIncome);
    
})

document.getElementById('save-btn').addEventListener('click', function(){
    
    const discountFigure = bringElement('discount-amount');
    const incomeAmountFigure = bringElement('total-income');

    const totalDiscountCalculation = incomeAmountFigure / 100;
    const discountAmountFigure = totalDiscountCalculation * discountFigure;

    const allElement = setElementInner('saving-amount', discountAmountFigure);

    const balanceTotal = bringElementInner('total-balance');
    const saveTotal = bringElementInner('saving-amount');
    const balanceTotalAmount = balanceTotal - saveTotal;
    const remainingTotal = setElementInner('remaining', balanceTotalAmount);

})