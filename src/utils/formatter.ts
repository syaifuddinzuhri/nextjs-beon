// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line default-param-last
export const currency = (number: number) => {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(number);
};

export const elipsisText = (text: string, limitChar = 30) => {
  if (text && text.length > limitChar) return `${text.substring(0, limitChar).trim()}...`;
  return text;
};

export const getMonthName = (month: number, index = true) => {
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  if (!index) return monthNames[month - 1];
  return monthNames[month];
};

export const formatSQLDate = (date: Date) => {
  if (date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
  return null;
};

export const getDayName = (day: number) => {
  const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return dayNames[day];
};

export const nthDay = (d: number) => {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const isValidDate = (date: Date) => {
  return !Number.isNaN(date.getTime());
};

export const buildDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `Choose ${getDayName(date.getDay())}, ${getMonthName(month)} ${day}${nthDay(day)}, ${year}`;
};

export const formatDefaultDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day} ${getMonthName(month)} ${year}`;
};

export const formatDefaultDateShort = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day} ${getMonthName(month).slice(0, 3)} ${year}`;
};

export const formatSortDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${year}-${(month + 1).toString().padStart(2, "0")}-${day}`;
};

export const formatSortDateSecond = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day.toString().padStart(2, "0")}/${(month + 1).toString().padStart(2, "0")}/${year}`;
};

export const formatDateFullIndonesia = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("id-ID", options);
};

export const formatDateFullIndonesiaWithTime = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleDateString("id-ID", options);
};

export const formatClock = (date: Date) => {
  if (!isValidDate(date)) return "-";

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};

export const secondsToTime = (seconds: number) => {
  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  // const s = Math.floor(seconds % 60)
  //   .toString()
  //   .padStart(2, "0");

  if (h === "00") {
    return `${m} menit`;
  }

  return `${h} jam ${m} menit`;
};

export const toNormalText = (val: string) => {
  return val
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const getMonthYear = (startMonth: number, startYear: number, count: number) => {
  let result = [];
  let month = startMonth;
  let year = startYear;

  for (let i = 0; i < count; i++) {
    let nextMonth = (month + i) % 12;
    let nextYear = year + Math.floor((month + i) / 12);

    if (nextMonth === 0) {
      nextMonth = 12;
      nextYear--;
    }

    let monthName = new Date(nextYear, nextMonth - 1, 1).toLocaleString('id', { month: 'long' });

    result.push({
      monthName: monthName,
      month: nextMonth,
      year: nextYear
    });
  }
  return result;
}

export const getMonthOptions = () => {
  let monthsList = [];

  for (let i = 0; i < 12; i++) {
    let monthName = new Date(2000, i, 1).toLocaleString('id', { month: 'long' });
    monthsList.push({
      label: monthName,
      value: i + 1
    });
  }
  return monthsList;
}

export const getMonthNow = (month: number) => {
  let yearNow = new Date().getFullYear();
  let monthName = new Date(yearNow, month - 1, 1).toLocaleString('id', { month: 'long' });
  return {
    label: monthName,
    value: month
  }
}

export const getYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2010;
  const numYears = currentYear - startYear + 1;
  let yearsList = [];

  for (let i = numYears - 1; i >= 0; i--) {
    yearsList.push({
      label: startYear + i,
      value: startYear + i
    });
  }
  return yearsList;
}
