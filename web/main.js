const model = new Model("decision_tree.pmml")
const numberFormat = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' });
const updatePrediction = async (row) => {
  const val = await model.predict(row)
  document.getElementById('prediction').innerText = numberFormat.format(val);
}
const onChange = (s) => {
  document.getElementById('prediction').innerText = 'Calculando...';
  s.addEventListener('change', () => {
    const row = {}
    Array.prototype.slice.call(document.getElementsByTagName("select")).forEach((s) => row[s.name] = s.value);
    Array.prototype.slice.call(document.getElementsByTagName("input")).forEach((s) => row[s.name] = s.value);
    updatePrediction(row);
  });
}
window.addEventListener('load', () => {
  Array.prototype.slice.call(document.getElementsByTagName("select")).forEach(onChange);
  Array.prototype.slice.call(document.getElementsByTagName("input")).forEach(onChange);
  updatePrediction({});
});
