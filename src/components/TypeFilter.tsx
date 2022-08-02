import React from 'react'
import styles from '../styles/TypeFilter.module.css'

type TypeProps = {
  typeSetHandler: (make: string) => void
}

export const TypeFilter: React.FC<TypeProps> = ({ typeSetHandler }) => {
  return (
    <div>
      <select
        onChange={(e) => typeSetHandler(e.target.value)}
        className={styles.typeList}
      >
        <option defaultValue="">Select type</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </div>
  )
}
