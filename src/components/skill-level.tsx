import * as React from 'react'
import { styles } from './skill-level.styles'

const SkillLevel: React.FC<{ level: 1 | 2 | 3 | 4 }> = ({ level }) => {
  return (
    <span className={styles.chartContainer}>
      <label>Skill Level:</label>
      <span className={styles.barFull} />
      <span className={level > 1 ? styles.barFull : styles.barEmpty} />
      <span className={level > 2 ? styles.barFull : styles.barEmpty} />
      <span className={level > 3 ? styles.barFull : styles.barEmpty} />
    </span>
  )
}

export default SkillLevel
