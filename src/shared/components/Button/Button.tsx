import React from 'react';
import { IconType } from 'react-icons';
import * as SC from './style';
import Link from 'next/link';

interface Props {
  Icon?: IconType;
  text?: string;
  callback?: () => void;
  iconSize?: number;
  scaleAnimation?: boolean;
  asLink?: boolean;
  url?: string;
}

export const Button = ({
  Icon,
  text,
  callback,
  iconSize = 20,
  scaleAnimation = true,
  asLink = false,
  url,
}: Props) => {
  return asLink && url ? (
    <Link href={url}>
      <SC.Wrapper scaleAnimation={scaleAnimation}>
        {Icon && <Icon size={iconSize} />}
        {text && <SC.Text>{text}</SC.Text>}
      </SC.Wrapper>
    </Link>
  ) : (
    <SC.Wrapper onClick={callback} scaleAnimation={scaleAnimation}>
      {Icon && <Icon size={iconSize} />}
      {text && <SC.Text>{text}</SC.Text>}
    </SC.Wrapper>
  );
};
