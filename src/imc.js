export function calcImc({ weight, height } = {}) {
  return weight / (height * height);
}
