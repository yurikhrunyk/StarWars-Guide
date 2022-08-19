// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@apollo/client'
import { queryArray } from '../graphql/queries'

export const useGetTypeQuery = (
  queryNumber: number,
  setData: (data: any) => void
) => {
  const { loading, data } = useQuery(queryArray[queryNumber])
  console.log(loading)
  console.log(data)
  setData(data)
}
