import React from 'react';
import * as SC from './style';
import ClipLoader from 'react-spinners/ClipLoader';

interface Props {
  isLoading: boolean;
}

export const Loader = ({ isLoading }: Props) => {
  return isLoading ? (
    <SC.Wrapper>
      <ClipLoader
        loading={true}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="white"
        speedMultiplier={0.7}
        cssOverride={{}}
      />
    </SC.Wrapper>
  ) : null;
};
