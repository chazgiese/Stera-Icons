import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlusRegular } from './PlusRegular';
import { PlusRegularDuotone } from './PlusRegularDuotone';
import { PlusBold } from './PlusBold';
import { PlusBoldDuotone } from './PlusBoldDuotone';
import { PlusFill } from './PlusFill';
import { PlusFillDuotone } from './PlusFillDuotone';

export interface PlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Plus with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PlusRegular } from 'stera-icons/PlusRegular';
 */
const Plus = memo(forwardRef<SVGSVGElement, PlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PlusFill ref={ref} {...rest} />;
  if (duotone) return <PlusRegularDuotone ref={ref} {...rest} />;
  return <PlusRegular ref={ref} {...rest} />;
}));

Plus.displayName = 'Plus';

export { Plus };
