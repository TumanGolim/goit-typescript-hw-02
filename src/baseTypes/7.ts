enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DaysOfWeek): boolean {
  return day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday;
}

const today: DaysOfWeek = DaysOfWeek.Friday;
const isTodayWeekend: boolean = isWeekend(today);

console.log(isTodayWeekend);
