import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleFourIcon as CircleFourIconRegular } from './circle-four';
import { CircleFourIconBold } from './circle-four-bold';
import { CircleFourIconFilled } from './circle-four-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CircleFourIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleFourIcon = memo(forwardRef<SVGSVGElement, CircleFourIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleFourIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleFourIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CircleFourIconRegular ref={ref} {...props} />;
  }
}));

CircleFourIcon.displayName = 'CircleFourIcon';

export { CircleFourIcon };
