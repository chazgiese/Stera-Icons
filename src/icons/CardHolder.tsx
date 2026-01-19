import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CardHolderRegular } from './CardHolderRegular';
import { CardHolderRegularDuotone } from './CardHolderRegularDuotone';
import { CardHolderBold } from './CardHolderBold';
import { CardHolderBoldDuotone } from './CardHolderBoldDuotone';
import { CardHolderFill } from './CardHolderFill';
import { CardHolderFillDuotone } from './CardHolderFillDuotone';

export interface CardHolderProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CardHolder - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CardHolderRegular } from 'stera-icons/icons/CardHolderRegular';
 */
const CardHolder = memo(forwardRef<SVGSVGElement, CardHolderProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CardHolderBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CardHolderBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CardHolderFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CardHolderFill ref={ref} {...rest} />;
  if (duotone) return <CardHolderRegularDuotone ref={ref} {...rest} />;
  return <CardHolderRegular ref={ref} {...rest} />;
}));

CardHolder.displayName = 'CardHolder';

// Triple export pattern (lucide-react style)
export { CardHolder, CardHolder as CardHolderIcon, CardHolder as SiCardHolder };
export default CardHolder;
