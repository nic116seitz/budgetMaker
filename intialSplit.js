let monthlyIncome;
let rent;
let util;
let rentOver; 
let rentPercent;

function splitCal(monthly, rentC, utilC) {
  let rentTarg = Math.round((monthly / 30) * 10) / 10
  if (rentC + utilC <= rentTarg) {
    rentOver = false;
    return rentPercent +=
      Math.round(((rentC + utilC / monthly) * 100) * 10) / 10
  }
  else if (rentC + utilC > rentTarg) {
    rentOver = true;
    return rentPercent +=
      Math.round(((rentC + utilC / monthly) * 100) * 10) / 10
  }
}
