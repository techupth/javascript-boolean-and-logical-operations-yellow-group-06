let isOver18 = true;
let hasCriminalBlacklist = false;

function checkParticipantEligibility(isOver18, hasCriminalBlacklist) {
  let isAllow = isOver18 && !hasCriminalBlacklist;
  console.log(isAllow);
}

checkParticipantEligibility(isOver18, hasCriminalBlacklist);
