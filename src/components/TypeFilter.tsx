import React from 'react'
import styles from '../styles/TypeFilter.module.css'

type TypeProps = {
  typeSetHandler: (type: string) => void
}

export const TypeFilter: React.FC<TypeProps> = ({ typeSetHandler }) => {
  return (
    <div>
      <select
        onChange={(e) => typeSetHandler(e.target.value)}
        className={styles.typeList}
      >
        <option defaultValue="">Select type</option>
        <option value="characters">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </div>
  )
}
