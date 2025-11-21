import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { LotusIcon as RegularLotusIcon } from './lotus';
import { LotusIconBold } from './lotus-bold';
import { LotusIconFilled } from './lotus-filled';
import { LotusIconFilltone } from './lotus-filltone';
import { LotusIconLinetone } from './lotus-linetone';

export interface LotusIconProps extends IconProps {
  variant?: IconVariant;
}

const LotusIcon = memo(forwardRef<SVGSVGElement, LotusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LotusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LotusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <LotusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <LotusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularLotusIcon ref={ref} {...props} />;
  }
}));

LotusIcon.displayName = 'LotusIcon';

export { LotusIcon };
