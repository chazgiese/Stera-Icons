import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CardHolderIcon as CardHolderIconRegular } from './card-holder';
import { CardHolderIconBold } from './card-holder-bold';
import { CardHolderIconFilled } from './card-holder-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CardHolderIconProps extends IconProps {
  variant?: IconVariant;
}

const CardHolderIcon = memo(forwardRef<SVGSVGElement, CardHolderIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CardHolderIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CardHolderIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CardHolderIconRegular ref={ref} {...props} />;
  }
}));

CardHolderIcon.displayName = 'CardHolderIcon';

export { CardHolderIcon };
