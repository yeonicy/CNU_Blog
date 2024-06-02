import { TAG } from '../api/types';
import { updatePostById } from '../api';
import { useMutation } from '@tanstack/react-query';

const useUpdatePostById = () => {
  const mutation = async ({ postId, title, contents, tag }: { postId: string; title: string; contents: string; tag: TAG }) => {
    await updatePostById(postId, title, contents, tag);
  };

  return useMutation({
    mutationKey: ['updatePost'],
    mutationFn: mutation,
  });
};
export default useUpdatePostById;
