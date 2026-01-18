import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EyeOffRegular } from './EyeOffRegular';
import { EyeOffRegularDuotone } from './EyeOffRegularDuotone';
import { EyeOffBold } from './EyeOffBold';
import { EyeOffBoldDuotone } from './EyeOffBoldDuotone';
import { EyeOffFill } from './EyeOffFill';
import { EyeOffFillDuotone } from './EyeOffFillDuotone';

export interface EyeOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * EyeOff with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { EyeOffRegular } from 'stera-icons/EyeOffRegular';
 */
const EyeOff = memo(forwardRef<SVGSVGElement, EyeOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <EyeOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <EyeOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <EyeOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <EyeOffFill ref={ref} {...rest} />;
  if (duotone) return <EyeOffRegularDuotone ref={ref} {...rest} />;
  return <EyeOffRegular ref={ref} {...rest} />;
}));

EyeOff.displayName = 'EyeOff';

export { EyeOff };
