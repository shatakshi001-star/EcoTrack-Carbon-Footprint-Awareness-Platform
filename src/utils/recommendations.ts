export function getRecommendation(carbon: number) {
  if (carbon < 10) {
    return "🌟 Excellent! Your carbon footprint is low. Keep it up!";
  }

  if (carbon < 20) {
    return "👍 Good job! Try reducing electricity usage and waste generation.";
  }

  return "⚠️ Your carbon footprint is high. Consider using public transport and saving energy.";
}