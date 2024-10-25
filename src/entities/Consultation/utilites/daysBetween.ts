export default function daysBetween(date1, date2) {
    const startDate = new Date(date1);
    const endDate = new Date(date2);
  
    // Різниця в мілісекундах
    const differenceInTime = Math.abs(endDate.getTime() - startDate.getTime());
  
    // Переведення мілісекунд у дні
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
  
    return differenceInDays;
  }
  