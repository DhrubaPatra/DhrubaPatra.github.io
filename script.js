function predictMolecule() {
  // Get input values
  const mass = document.getElementById('mass').value;
  const density = document.getElementById('density').value;
  const meltingPoint = document.getElementById('meltingPoint').value;

  // Simple logic to "predict" molecule structure
  let prediction = "";
  if (mass > 20 && density > 1.5 && meltingPoint > 100) {
    prediction = "Structure likely to be a Protein.";
  } else if (mass < 10 && density < 1.5 && meltingPoint < 100) {
    prediction = "Structure likely to be an Organic Compound.";
  } else {
    prediction = "Structure is inconclusive.";
  }

  // Display the prediction
  document.getElementById('prediction-result').innerText = "Prediction: " + prediction;
}
