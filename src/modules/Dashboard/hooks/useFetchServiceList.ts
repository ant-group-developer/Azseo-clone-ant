import { fetchServiceList } from '@/modules/Dashboard/apis'
import { useQuery } from '@tanstack/react-query'

export const useFetchServiceList = () => {
  const { data, ...restReponse } = useQuery({
    queryKey: ['ServiceList'],
    queryFn: fetchServiceList
  })

  const defaultData = {
    total: 0,
    data: []
  }
  const dataServiceList = data ?? defaultData

  return {
    data: dataServiceList,
    ...restReponse
  }
}
