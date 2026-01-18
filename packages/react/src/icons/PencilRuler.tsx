import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PencilRulerRegular } from './PencilRulerRegular';
import { PencilRulerRegularDuotone } from './PencilRulerRegularDuotone';
import { PencilRulerBold } from './PencilRulerBold';
import { PencilRulerBoldDuotone } from './PencilRulerBoldDuotone';
import { PencilRulerFill } from './PencilRulerFill';
import { PencilRulerFillDuotone } from './PencilRulerFillDuotone';

export interface PencilRulerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PencilRuler with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PencilRulerRegular } from 'stera-icons/PencilRulerRegular';
 */
const PencilRuler = memo(forwardRef<SVGSVGElement, PencilRulerProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PencilRulerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PencilRulerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PencilRulerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PencilRulerFill ref={ref} {...rest} />;
  if (duotone) return <PencilRulerRegularDuotone ref={ref} {...rest} />;
  return <PencilRulerRegular ref={ref} {...rest} />;
}));

PencilRuler.displayName = 'PencilRuler';

export { PencilRuler };
