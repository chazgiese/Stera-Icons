import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CardHolderIcon as RegularCardHolderIcon } from './card-holder';
import { CardHolderIconDuotone as CardHolderIconDuotone } from './card-holder-duotone';
import { CardHolderIconBold as CardHolderIconBold } from './card-holder-bold';
import { CardHolderIconBoldDuotone as CardHolderIconBoldDuotone } from './card-holder-bold-duotone';
import { CardHolderIconFill as CardHolderIconFill } from './card-holder-fill';
import { CardHolderIconFillDuotone as CardHolderIconFillDuotone } from './card-holder-fill-duotone';

export interface CardHolderIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CardHolderIcon = memo(forwardRef<SVGSVGElement, CardHolderIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CardHolderIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CardHolderIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CardHolderIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CardHolderIconFill ref={ref} {...props} />;
  if (duotone) return <CardHolderIconDuotone ref={ref} {...props} />;
  return <RegularCardHolderIcon ref={ref} {...props} />;
}));

CardHolderIcon.displayName = 'CardHolderIcon';

export { CardHolderIcon };
