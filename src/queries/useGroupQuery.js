import { useQuery } from '@tanstack/react-query';
import { getGroupService } from '../apis/service/groupService';

export function useGroupQuery(isOpen) {
  return useQuery({
    queryKey: ['groups'],
    queryFn: getGroupService, // result 배열 반환
    enabled: !isOpen, // 모달이 열렸을 때는 fetch X
    retry: 3, // 3번 재호출 이후에 에러 발생
    // refetchInterval: 3000, // 3초마다 refetch
    // refetchIntervalInBackground: true, // true값이면 백그라운드에서도 refetch해준다.
  });
}
