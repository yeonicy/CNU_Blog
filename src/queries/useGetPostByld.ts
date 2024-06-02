import { getPostById } from '../api';
import { useQuery } from '@tanstack/react-query';

const useGetPostById = (postId: string) => {
  const fetchPost = async () => {
    const { data } = await getPostById(postId);
    return data;
  };

  return useQuery({
    queryKey: ['getPostById', postId],
    queryFn: fetchPost,
    enabled: !!postId,
  });
};

export default useGetPostById;