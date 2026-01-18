import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BladeSwordRegular } from './BladeSwordRegular';
import { BladeSwordRegularDuotone } from './BladeSwordRegularDuotone';
import { BladeSwordBold } from './BladeSwordBold';
import { BladeSwordBoldDuotone } from './BladeSwordBoldDuotone';
import { BladeSwordFill } from './BladeSwordFill';
import { BladeSwordFillDuotone } from './BladeSwordFillDuotone';

export interface BladeSwordProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BladeSword with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BladeSwordRegular } from 'stera-icons/BladeSwordRegular';
 */
const BladeSword = memo(forwardRef<SVGSVGElement, BladeSwordProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BladeSwordBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BladeSwordBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BladeSwordFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BladeSwordFill ref={ref} {...rest} />;
  if (duotone) return <BladeSwordRegularDuotone ref={ref} {...rest} />;
  return <BladeSwordRegular ref={ref} {...rest} />;
}));

BladeSword.displayName = 'BladeSword';

export { BladeSword };
