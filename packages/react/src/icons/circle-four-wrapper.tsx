import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CircleFourIcon as CircleFourIconRegular } from './circle-four';
import { CircleFourIconBold } from './circle-four-bold';
import { CircleFourIconFilled } from './circle-four-filled';
import { CircleFourIconFilltone } from './circle-four-filltone';
import { CircleFourIconLinetone } from './circle-four-linetone';

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
    case 'filltone':
      return <CircleFourIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CircleFourIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CircleFourIconRegular ref={ref} {...props} />;
  }
}));

CircleFourIcon.displayName = 'CircleFourIcon';

export { CircleFourIcon };
