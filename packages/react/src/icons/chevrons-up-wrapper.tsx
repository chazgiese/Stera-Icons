import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronsUpIcon as ChevronsUpIconRegular } from './chevrons-up';
import { ChevronsUpIconBold } from './chevrons-up-bold';
import { ChevronsUpIconFilled } from './chevrons-up-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ChevronsUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ChevronsUpIcon = memo(forwardRef<SVGSVGElement, ChevronsUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChevronsUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChevronsUpIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChevronsUpIconRegular ref={ref} {...props} />;
  }
}));

ChevronsUpIcon.displayName = 'ChevronsUpIcon';

export { ChevronsUpIcon };
