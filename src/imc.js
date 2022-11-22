/**
 * get inspiration from python: named params (https://1drv.ms/u/s!Agre0RjhOj8Pg7Ja6MW_hLGRifvnRQ)
 *
 * first thought: make arg an object (configuration object)
 * second thought: destructuring assignment (https://1drv.ms/u/s!Agre0RjhOj8Pg7JbSR8vrmYfQchcQw) 
 * alias (const {key: alias} = object;)
 * 
 * 
 * @export
 * @param {*} [{ weight, height }={}]
 * @return {*} 
 */
export function calcImc({ weight, height } = {}) {
  return weight / (height * height);
}
