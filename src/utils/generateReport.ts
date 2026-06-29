import jsPDF from "jspdf";

export const generateReport = (data: any) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("EcoTrack Carbon Footprint Report", 20, 20);

  doc.setFontSize(12);

  doc.text(`Transport Distance: ${data.transportKm} km`, 20, 40);
  doc.text(`Electricity Usage: ${data.electricityKwh} kWh`, 20, 50);
  doc.text(`Water Usage: ${data.waterUsage} Litres`, 20, 60);
  doc.text(`Waste Generated: ${data.wasteKg} kg`, 20, 70);
  doc.text(`Diet Type: ${data.diet}`, 20, 80);
  doc.text(`Carbon Footprint: ${data.carbon} kg CO₂`, 20, 90);

  doc.text(
    `Rating: ${
      data.carbon < 10
        ? "Excellent"
        : data.carbon < 20
        ? "Moderate"
        : "High"
    }`,
    20,
    100
  );

  doc.save("EcoTrack_Report.pdf");
};