import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListCheckIcon as ListCheckIconRegular } from './list-check';
import { ListCheckIconBold } from './list-check-bold';
import { ListCheckIconFilled } from './list-check-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ListCheckIconProps extends IconProps {
  variant?: IconVariant;
}

const ListCheckIcon = memo(forwardRef<SVGSVGElement, ListCheckIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ListCheckIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ListCheckIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ListCheckIconRegular ref={ref} {...props} />;
  }
}));

ListCheckIcon.displayName = 'ListCheckIcon';

export { ListCheckIcon };
