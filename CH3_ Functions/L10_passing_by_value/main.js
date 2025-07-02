function getBillForMonth(costPerSend, messagesSent) {
  return costPerSend * messagesSent;
}

function monthlyBillIncrease(costPerSend, numLastMonth, numThisMonth) {
  let lastMonthBill = getBillForMonth(costPerSend, numLastMonth);
  let thisMonthBill = getBillForMonth(costPerSend, numThisMonth);
  return thisMonthBill - lastMonthBill;
}

export { getBillForMonth, monthlyBillIncrease };