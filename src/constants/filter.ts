export const FilterProduct: Array<{ label: string; value: number }> = [
  { label: "Terlaris", value: 3 },
  { label: "Termurah", value: 1 },
  { label: "Termahal", value: 2 },
  { label: "Terfavorit", value: 4 },
  { label: "Tercepat", value: 5 },
];

export const FilterTestimonial: Array<{ label: string; value: string }> = [
  { label: "Terbaru", value: "terbaru" },
  { label: "Rating Tertinggi", value: "tertinggi" },
  { label: "Rating Terendah", value: "terendah" },
];

export const FilterOrder: Array<{ label: string; value: string }> = [
  { label: "Semua", value: "" },
  { label: "Completed", value: "completed" },
  { label: "Pending", value: "pending" },
  { label: "Processing", value: "processing" },
  { label: "Inprogress", value: "inprogress" },
  { label: "Canceled", value: "canceled" },
  { label: "Partial", value: "partial" },
  { label: "Waiting", value: "waiting" },
];

export const FilterServiceInfo: Array<{ label: string; value: string }> = [
  { label: "Harga Baru", value: "price" },
  { label: "Turun Harga", value: "price" },
  { label: "Info Penting Layanan", value: "pending" },
  { label: "Layanan Baru", value: "new" },
  { label: "Layanan ON", value: "enable" },
  { label: "Layanan OFF", value: "disable" },
];
