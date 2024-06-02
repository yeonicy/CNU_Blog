import NOTHING_HERE_IMG from '../assets/NOTHING_HERE.jpg';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const NoPostList = () => {
  return (
    <Wrapper>
      <img src={NOTHING_HERE_IMG} alt="nothing" style={{ width: '30rem' }} />
      <h1>아직 작성된 포스트가 없어요</h1>
    </Wrapper>
  );
};

export default NoPostList;