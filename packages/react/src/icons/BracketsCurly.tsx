import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BracketsCurlyRegular } from './BracketsCurlyRegular';
import { BracketsCurlyRegularDuotone } from './BracketsCurlyRegularDuotone';
import { BracketsCurlyBold } from './BracketsCurlyBold';
import { BracketsCurlyBoldDuotone } from './BracketsCurlyBoldDuotone';
import { BracketsCurlyFill } from './BracketsCurlyFill';
import { BracketsCurlyFillDuotone } from './BracketsCurlyFillDuotone';

export interface BracketsCurlyProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BracketsCurly with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BracketsCurlyRegular } from 'stera-icons/BracketsCurlyRegular';
 */
const BracketsCurly = memo(forwardRef<SVGSVGElement, BracketsCurlyProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BracketsCurlyBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BracketsCurlyBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BracketsCurlyFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BracketsCurlyFill ref={ref} {...rest} />;
  if (duotone) return <BracketsCurlyRegularDuotone ref={ref} {...rest} />;
  return <BracketsCurlyRegular ref={ref} {...rest} />;
}));

BracketsCurly.displayName = 'BracketsCurly';

export { BracketsCurly };
