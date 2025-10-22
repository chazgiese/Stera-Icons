import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CardHolderIcon as CardHolderIconRegular } from './card-holder';
import { CardHolderIconBold } from './card-holder-bold';
import { CardHolderIconFilled } from './card-holder-filled';
import { CardHolderIconFilltone } from './card-holder-filltone';
import { CardHolderIconLinetone } from './card-holder-linetone';

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
    case 'filltone':
      return <CardHolderIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CardHolderIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CardHolderIconRegular ref={ref} {...props} />;
  }
}));

CardHolderIcon.displayName = 'CardHolderIcon';

export { CardHolderIcon };
