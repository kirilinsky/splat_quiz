import img1 from '../../assets/images/speedometer/1.svg'
import img2 from '../../assets/images/speedometer/2.svg'
import img3 from '../../assets/images/speedometer/3.svg'
import img4 from '../../assets/images/speedometer/4.svg'
import img5 from '../../assets/images/speedometer/5.svg'
import img6 from '../../assets/images/speedometer/6.svg'

import styles from './style.module.css'

import {useSelector} from 'react-redux'

export const textColor = {
  success: {
    color: 'rgba(70, 187, 68, 1)',
  },
  middle: {
    color: 'rgba(255, 167, 64, 1)',
  },
  error: {
    color: 'rgba(220, 57, 45, 1)',
  },
}

export const Scale = () => {
  const bmi = useSelector((state) => state.score.bmiNumber)

  if (bmi <= 18) {
    return <img src={img1} alt="" />
  }
  if (bmi >= 19 && bmi <= 24) {
    return <img src={img2} alt="" />
  }
  if (bmi >= 25 && bmi <= 29) {
    return <img src={img3} alt="" />
  }
  if (bmi >= 30 && bmi <= 34) {
    return <img src={img4} alt="" />
  }
  if (bmi >= 35 && bmi <= 39) {
    return <img src={img5} alt="" />
  }
  if (bmi >= 40) {
    return <img src={img6} alt="" />
  }
}

export const FoodStatusText = () => {
  const bmi = useSelector((state) => state.score.bmiNumber)

  if (bmi <= 18) {
    return (
      <div className={styles.description} style={textColor.success}>
        У вас нет проблем с питанием
      </div>
    )
  }
  if (bmi >= 19 && bmi <= 24) {
    return (
      <div className={styles.description} style={textColor.success}>
        У вас нет проблем с питанием
      </div>
    )
  }
  if (bmi >= 25 && bmi <= 29) {
    return (
      <div className={styles.description} style={textColor.middle}>
        У вас есть незначительные проблемы с питанием
      </div>
    )
  }
  if (bmi >= 30 && bmi <= 34) {
    return (
      <div className={styles.description} style={textColor.middle}>
        У вас есть незначительные проблемы с питанием
      </div>
    )
  }
  if (bmi >= 35 && bmi <= 39) {
    return (
      <div className={styles.description} style={textColor.error}>
        У вас есть проблемы с питанием
      </div>
    )
  }
  if (bmi >= 40) {
    return (
      <div className={styles.description} style={textColor.error}>
        У вас есть проблемы с питанием
      </div>
    )
  }
}

export const ScaleHygiene = () => {
  const s = useSelector((state) => state.score.sensitivity)
  const c = useSelector((state) => state.score.caries)
  const i = useSelector((state) => state.score.inflammationAndBleeding)
  const h = useSelector((state) => state.score.hygieneLevel)

  const arr = [s, c, i, h]

  // Если все Low - Зеленый 1
  if (s <= 5 && c <=3 && i <= 3 && h <= 3) {
    return <img src={img1} alt="" />
  }

  // Если один Medium
  const oneMedium = arr.filter(el => el >= 4 && el <= 6)
  if (oneMedium.length === 1) return <img src={img2} alt="" />

  // Если больше двух Medium
  const medium = arr.filter(el => el >= 4 && el <= 6)
  if (medium.length >= 2) return <img src={img3} alt="" />

  // Если один High
  const oneHigh = arr.filter(el => el >= 7 && el <= 13)
  if (oneHigh.length === 1) return <img src={img4} alt="" />

  // Если боль двух High
  const high = arr.filter(el => el >= 7 && el <= 13)
  if (high.length >= 2) return <img src={img5} alt="" />

  // Если все High
  if (s <= 10 && c <=10 && i <= 7 && h <= 7) {
    return <img src={img6} alt="" />
  }
}

export const HygieneStatusText = () => {
  const s = useSelector((state) => state.score.sensitivity)
  const c = useSelector((state) => state.score.caries)
  const i = useSelector((state) => state.score.inflammationAndBleeding)
  const h = useSelector((state) => state.score.hygieneLevel)

  const arr = [s, c, i, h]

  // Если все Low - Зеленый 1
  if (s <= 5 && c <=3 && i <= 3 && h <= 3) {
    return (
      <div className={styles.description} style={textColor.success}>
        У вас нет проблем с уровнем гигиены
      </div>
    )
  }

  // Если один Medium
  const oneMedium = arr.filter(el => el >= 4 && el <= 6)
  if (oneMedium.length === 1) return (
    <div className={styles.description} style={textColor.success}>
      У вас нет проблем с уровнем гигиены
    </div>
  )

  // Если больше двух Medium
  const medium = arr.filter(el => el >= 4 && el <= 6)
  if (medium.length >= 2) return (
    <div className={styles.description} style={textColor.middle}>
      У вас есть незначительные проблемы с уровнем гигиены
    </div>
  )

  // Если один High
  const oneHigh = arr.filter(el => el >= 7 && el <= 13)
  if (oneHigh.length === 1) return (
    <div className={styles.description} style={textColor.middle}>
      У вас есть незначительные проблемы с уровнем гигиены
    </div>
  )

  // Если боль двух High
  const high = arr.filter(el => el >= 7 && el <= 13)
  if (high.length >= 2) return (
    <div className={styles.description} style={textColor.error}>
      У вас есть проблемы с уровнем гигиены
    </div>
  )

  // Если все High
  if (s <= 10 && c <= 10 && i <= 7 && h <= 7) {
    return (
      <div className={styles.description} style={textColor.error}>
        У вас есть проблемы с уровнем гигиены
      </div>
    )
  }
}
