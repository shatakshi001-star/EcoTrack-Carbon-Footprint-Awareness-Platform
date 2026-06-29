export const calculateCarbonFootprint = ({
  transportKm,
  electricityKwh,
  waterUsage,
  wasteKg,
  diet,
}: {
  transportKm: number;
  electricityKwh: number;
  waterUsage: number;
  wasteKg: number;
  diet: string;
}) => {
  let totalCarbon = 0;

  // Transport emissions
  totalCarbon += transportKm * 0.21;

  // Electricity emissions
  totalCarbon += electricityKwh * 0.85;

  // Water usage emissions
  totalCarbon += waterUsage * 0.001;

  // Waste emissions
  totalCarbon += wasteKg * 0.5;

  // Diet emissions
  if (diet === "non-vegetarian") {
    totalCarbon += 5;
  } else if (diet === "vegetarian") {
    totalCarbon += 3;
  } else {
    totalCarbon += 2;
  }

  return Number(totalCarbon.toFixed(2));
};