import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PushPinRegular } from './PushPinRegular';
import { PushPinRegularDuotone } from './PushPinRegularDuotone';
import { PushPinBold } from './PushPinBold';
import { PushPinBoldDuotone } from './PushPinBoldDuotone';
import { PushPinFill } from './PushPinFill';
import { PushPinFillDuotone } from './PushPinFillDuotone';

export interface PushPinProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PushPin with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PushPinRegular } from 'stera-icons/PushPinRegular';
 */
const PushPin = memo(forwardRef<SVGSVGElement, PushPinProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PushPinBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PushPinBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PushPinFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PushPinFill ref={ref} {...rest} />;
  if (duotone) return <PushPinRegularDuotone ref={ref} {...rest} />;
  return <PushPinRegular ref={ref} {...rest} />;
}));

PushPin.displayName = 'PushPin';

export { PushPin };
