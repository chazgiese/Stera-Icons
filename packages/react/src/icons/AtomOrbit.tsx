import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AtomOrbitRegular } from './AtomOrbitRegular';
import { AtomOrbitRegularDuotone } from './AtomOrbitRegularDuotone';
import { AtomOrbitBold } from './AtomOrbitBold';
import { AtomOrbitBoldDuotone } from './AtomOrbitBoldDuotone';
import { AtomOrbitFill } from './AtomOrbitFill';
import { AtomOrbitFillDuotone } from './AtomOrbitFillDuotone';

export interface AtomOrbitProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AtomOrbit with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { AtomOrbitRegular } from 'stera-icons/AtomOrbitRegular';
 */
const AtomOrbit = memo(forwardRef<SVGSVGElement, AtomOrbitProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AtomOrbitBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AtomOrbitBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AtomOrbitFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AtomOrbitFill ref={ref} {...rest} />;
  if (duotone) return <AtomOrbitRegularDuotone ref={ref} {...rest} />;
  return <AtomOrbitRegular ref={ref} {...rest} />;
}));

AtomOrbit.displayName = 'AtomOrbit';

export { AtomOrbit };
