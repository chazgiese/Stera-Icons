import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowBigUpIcon as ArrowBigUpIconRegular } from './arrow-big-up';
import { ArrowBigUpIconBold } from './arrow-big-up-bold';
import { ArrowBigUpIconFilled } from './arrow-big-up-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowBigUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowBigUpIcon = memo(forwardRef<SVGSVGElement, ArrowBigUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowBigUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowBigUpIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowBigUpIconRegular ref={ref} {...props} />;
  }
}));

ArrowBigUpIcon.displayName = 'ArrowBigUpIcon';

export { ArrowBigUpIcon };
