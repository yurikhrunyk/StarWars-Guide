/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { TypeFilter } from './components/TypeFilter'
import { ModelFilter } from './components/ModelFilter'
import styles from './App.module.css'
import { getAllPeople } from './graphql/queries'

function App() {
  const [type, setType] = useState<string>('')
  const [imgNumber, setImgNumber] = useState<string>('')
  // const [queryNumber, setQueryNumber] = useState<number>(0)
  const [data, setData] = useState<{ id: string; name: string }[]>()
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (type === 'characters') {
      getAllPeople()
        .then((allPeople) => {
          setData(allPeople)
          setIsLoading(false)
        })
        .catch((err) => {
          setIsLoading(false)
          setIsError(true)
        })
    }
    // if (type === 'planets') {
    //   setQueryNumber(1)
    // }
    // if (type === 'starships') {
    //   setQueryNumber(2)
    // }
  }, [type])

  const typeSetHandler = (type: string) => {
    setType(type)
    setIsLoading(true)
    setImgNumber('')
  }

  const imgNumberSetHandler = (imgNumber: string) => {
    setImgNumber(imgNumber)
  }
  console.log(data)
  return (
    <div className={styles.app}>
      <TypeFilter typeSetHandler={typeSetHandler} />
      {type ? (
        <ModelFilter
          names={data}
          imgNumberSetHandler={imgNumberSetHandler}
          isError={isError}
          isLoading={isLoading}
        />
      ) : null}
      <div>
        {imgNumber ? (
          <img
            src={`https://starwars-visualguide.com/assets/img/${type}/${imgNumber}.jpg`}
            alt="Opppsss, nothing here"
            className={styles.appImage}
          />
        ) : null}
      </div>
    </div>
  )
}

export default App
