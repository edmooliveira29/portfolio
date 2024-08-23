export const experienceTime = (date: string) => {
  const dataAtual = new Date()
  const data = new Date(date)

  let anos = dataAtual.getFullYear() - data.getFullYear()
  let meses = dataAtual.getMonth() - data.getMonth()

  if (meses < 0) {
    anos--
    meses += 12
  }
  if (anos === 0) {
    return `${meses} meses`
  } else {
    return `${anos} anos e ${meses} meses`
  }
}