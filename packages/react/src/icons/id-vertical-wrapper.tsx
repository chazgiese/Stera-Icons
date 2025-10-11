import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { IdVerticalIcon as IdVerticalIconRegular } from './id-vertical';
import { IdVerticalIconBold } from './id-vertical-bold';
import { IdVerticalIconFilled } from './id-vertical-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface IdVerticalIconProps extends IconProps {
  variant?: IconVariant;
}

const IdVerticalIcon = memo(forwardRef<SVGSVGElement, IdVerticalIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <IdVerticalIconFilled ref={ref} {...props} />;
    case 'bold':
      return <IdVerticalIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <IdVerticalIconRegular ref={ref} {...props} />;
  }
}));

IdVerticalIcon.displayName = 'IdVerticalIcon';

export { IdVerticalIcon };
