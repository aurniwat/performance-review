/**
 * @param {string} mbti
 * @return {{
 *  dominant: string,
 *  auxiliary: string,
 *  tertiary: string,
 *  inferior: string,
 * }}
 */
export function findCognitiveFunction(mbti) {
  const mapFlipValue = {
    I: "E",
    S: "N",
    T: "F",
    J: "P",
    E: "I",
    N: "S",
    F: "T",
    P: "J"
  }
  const getFlipValue = value => {
    return mapFlipValue[value]
  }

  const mbtiList = mbti.split("")
  const fn1 = mbtiList[1]
  const fn2 = mbtiList[2]

  const dominant = `${fn1}${mbtiList[3] === "P" ? "e" : "i"}`
  const auxiliary = `${fn2}${mbtiList[3] === "P" ? "i" : "e"}`
  const tertiary = `${getFlipValue(auxiliary[0])}${auxiliary[1] === "e" ? "i" : "e"}`
  const inferior = `${getFlipValue(dominant[0])}${dominant[1] === "e" ? "i" : "e"}`

  return { dominant, auxiliary, tertiary, inferior }
}
