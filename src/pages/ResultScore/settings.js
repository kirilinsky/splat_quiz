import { useState } from 'react'
import styles from './style.module.css'

const description = (name, numbers) => {
  if (name <= numbers[0]) return 'Низкий риск'
  if (name >= numbers[1][0] && name <= numbers[1][1]) return 'Средний риск'
  if (name <= numbers[2][0] && name <= numbers[2][1]) return 'Высокий риск'
}

const Info = (name, numbers, object) => {
  if (name <= numbers[0]) return object.low
  if (name >= numbers[1][0] && name <= numbers[1][1]) return object.medium
  if (name <= numbers[2][0] && name <= numbers[2][1]) return object.high
}

const styleLine = {
  light: {
    background: 'linear-gradient(90deg, #B2EF8D 0%, #46BB44 100%)',
  },
  medium: {
    background: 'linear-gradient(90deg, #FFE176 0%, #FFA740 100%)',
  },
  hight: {
    background: 'linear-gradient(90deg, #FF868E 1.37%, #F42C1D 100%)',
  },
}

export const ResultItem = ({
  problemsCount,
  range,
  objectName,
  rangeLength,
  title,
  colorLine,
}) => {
  const [activeClass, setActiveClass] = useState(false)
  return (
    <div
      className={`${styles.item} ${activeClass ? styles.active : ''}`}
      onClick={() => setActiveClass(!activeClass)}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.line} style={colorLine[problemsCount]}>
        <span
          style={{
            left: (100 / rangeLength) * problemsCount + '%',
          }}
        ></span>
      </div>
      <div className={styles.description}>
        {description(problemsCount, range)}
      </div>
      <div className={styles.result_desc}>
        {Info(problemsCount, range, objectName)}
      </div>
    </div>
  )
}

export const colorLineRemineralizing = {
  0: styleLine.light,
  1: styleLine.light,
  2: styleLine.light,
  3: styleLine.light,
  4: styleLine.light,
  5: styleLine.light,
  6: styleLine.medium,
  7: styleLine.medium,
  8: styleLine.medium,
  9: styleLine.medium,
  10: styleLine.hight,
  11: styleLine.hight,
  12: styleLine.hight,
  13: styleLine.hight,
}

export const colorLineCaries = {
  0: styleLine.light,
  1: styleLine.light,
  2: styleLine.light,
  3: styleLine.light,
  4: styleLine.medium,
  5: styleLine.medium,
  6: styleLine.medium,
  7: styleLine.medium,
  8: styleLine.medium,
  9: styleLine.medium,
  10: styleLine.hight,
  11: styleLine.hight,
  12: styleLine.hight,
}

export const colorLineBleeding = {
  0: styleLine.light,
  1: styleLine.light,
  2: styleLine.light,
  3: styleLine.light,
  4: styleLine.medium,
  5: styleLine.medium,
  6: styleLine.medium,
  7: styleLine.hight,
  8: styleLine.hight,
}

export const colorLineHygieneLevel = {
  0: styleLine.light,
  1: styleLine.light,
  2: styleLine.light,
  3: styleLine.light,
  4: styleLine.medium,
  5: styleLine.medium,
  6: styleLine.medium,
  7: styleLine.hight,
}

export const recommendation = {
  rem: {
    low: 'У вас низкий риск чувствительности зубов, обращайте внимание на продукты с комплексным уходом',
    medium:
      'У вас есть риск развития чувствительности зубов, вам необходимы укрепляющие зубные пасты содержащие различные соли кальция, а также для снижения чувствительности обращайте на ионы калия в составе продукции',
    high: 'У вас высокий риск развития чувствительности, вам необходимы продукты с выраженым укрепляющим эффектом. Такие продукты должны содержать гидроксиапатит для укрепления и снижения чувстительности',
  },
  caries: {
    low: 'У вас низки риск развития кариеса, так держать! И не забывайте про профилактику кариеса через средства гигиены полости рта',
    medium:
      'У вас есть риск развития кариеса, поэтому обращайте внимания на противокариесные продукты по уходу за полостью рта',
    high: 'У вас высокий риск развития кариеса, вам необходимы противокареисные продукты, содержащие активные ингредиенты с выраженным эффектом. Обращайте внимания на такие компоненты в зубных пастах, как молочные ферменты, которые разрушают оболочки кариесогенных бактерий, сохраняет дыхание свежим и замедляет образование зубного налета. Также Вам необходимо использовать продукты содержащие фтор, так как стоматологические ассоциации ведущих стран мира признали фторированные зубные пасты эффективным профилактическим средством против кариеса',
  },
  bleeding: {
    low: 'У вас низкий риск воспалительных реакций и кровоточивость, для профилактики не забываете пользоваться ополаскивателем для полсоти рта',
    medium:
      'У вас есть риск развития воспалительных реакций и кровоточивости, обращайте внимания на противовоспалительный и кровоостанавливаюий эффекты в продуктах',
    high: 'У вас высокий риск развития воспалительных реакций и кровоточивости, Вам необходимо использовать продукты с выраженным противовоспалительным и кровоостанавливающим эффектами. Ищите в составе продуктов такие ингредиенты, как экстракты трав, эфирные масла, глицирризиновая кислота и ионы цинка',
  },
  hygieneLevel: {
    low: 'У вас хороший уровень гигиены, Вы хорошо очищаете зубы! Не забывайте пользоваться дополнительными средствами очищения - очищающими пенками после еды, а также зубными нитями',
    medium:
      'У вас есть риск развития плохой гигиены, обращайте внимания на продукты с хорошим очищением, содержащие ферменты, абразивы и антибактериальные ингредиенты',
    high: 'У вас высокий риск плохой гигиены полости рта, Вам необходимы использовать продукты содержащие в своем составе антибактериальные компоненты',
  },
}
