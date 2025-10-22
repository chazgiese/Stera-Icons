import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { IdVIcon as RegularIdVIcon } from './id-v';
import { IdVIconBold } from './id-v-bold';
import { IdVIconFilled } from './id-v-filled';
import { IdVIconFilltone } from './id-v-filltone';
import { IdVIconLinetone } from './id-v-linetone';

export interface IdVIconProps extends IconProps {
  variant?: IconVariant;
}

const IdVIcon = memo(forwardRef<SVGSVGElement, IdVIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <IdVIconFilled ref={ref} {...props} />;
    case 'bold':
      return <IdVIconBold ref={ref} {...props} />;
    case 'filltone':
      return <IdVIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <IdVIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularIdVIcon ref={ref} {...props} />;
  }
}));

IdVIcon.displayName = 'IdVIcon';

export { IdVIcon };
