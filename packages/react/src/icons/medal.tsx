import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MedalRegular } from './MedalRegular';
import { MedalRegularDuotone } from './MedalRegularDuotone';
import { MedalBold } from './MedalBold';
import { MedalBoldDuotone } from './MedalBoldDuotone';
import { MedalFill } from './MedalFill';
import { MedalFillDuotone } from './MedalFillDuotone';

export interface MedalProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Medal with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { MedalRegular } from 'stera-icons/MedalRegular';
 */
const Medal = memo(forwardRef<SVGSVGElement, MedalProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MedalBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MedalBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MedalFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MedalFill ref={ref} {...rest} />;
  if (duotone) return <MedalRegularDuotone ref={ref} {...rest} />;
  return <MedalRegular ref={ref} {...rest} />;
}));

Medal.displayName = 'Medal';

export { Medal };
