import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { IdHorizontalIcon as IdHorizontalIconRegular } from './id-horizontal';
import { IdHorizontalIconBold } from './id-horizontal-bold';
import { IdHorizontalIconFilled } from './id-horizontal-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface IdHorizontalIconProps extends IconProps {
  variant?: IconVariant;
}

const IdHorizontalIcon = memo(forwardRef<SVGSVGElement, IdHorizontalIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <IdHorizontalIconFilled ref={ref} {...props} />;
    case 'bold':
      return <IdHorizontalIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <IdHorizontalIconRegular ref={ref} {...props} />;
  }
}));

IdHorizontalIcon.displayName = 'IdHorizontalIcon';

export { IdHorizontalIcon };
