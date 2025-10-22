import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { IdHIcon as RegularIdHIcon } from './id-h';
import { IdHIconBold } from './id-h-bold';
import { IdHIconFilled } from './id-h-filled';
import { IdHIconFilltone } from './id-h-filltone';
import { IdHIconLinetone } from './id-h-linetone';

export interface IdHIconProps extends IconProps {
  variant?: IconVariant;
}

const IdHIcon = memo(forwardRef<SVGSVGElement, IdHIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <IdHIconFilled ref={ref} {...props} />;
    case 'bold':
      return <IdHIconBold ref={ref} {...props} />;
    case 'filltone':
      return <IdHIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <IdHIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularIdHIcon ref={ref} {...props} />;
  }
}));

IdHIcon.displayName = 'IdHIcon';

export { IdHIcon };
