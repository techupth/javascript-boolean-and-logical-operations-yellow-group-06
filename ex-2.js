// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

function checkPermision(
  lastMonthPaidMoreThan4000,
  isWeekday,
  hasBoughtProductFromITCategory,
  hasAttendedDiscountEvent,
  isPlatinum
) {
  let hasPromotion =
    (lastMonthPaidMoreThan4000 || isPlatinum) &&
    isWeekday &&
    hasBoughtProductFromITCategory &&
    hasAttendedDiscountEvent &&
    hasPromotion;
  console.log(hasPromotion);
}

checkPermision(
  lastMonthPaidMoreThan4000,
  isWeekday,
  hasBoughtProductFromITCategory,
  hasAttendedDiscountEvent,
  isPlatinum
);
