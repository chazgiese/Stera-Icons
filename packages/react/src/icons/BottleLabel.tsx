import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BottleLabelRegular } from './BottleLabelRegular';
import { BottleLabelRegularDuotone } from './BottleLabelRegularDuotone';
import { BottleLabelBold } from './BottleLabelBold';
import { BottleLabelBoldDuotone } from './BottleLabelBoldDuotone';
import { BottleLabelFill } from './BottleLabelFill';
import { BottleLabelFillDuotone } from './BottleLabelFillDuotone';

export interface BottleLabelProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BottleLabel with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BottleLabelRegular } from 'stera-icons/BottleLabelRegular';
 */
const BottleLabel = memo(forwardRef<SVGSVGElement, BottleLabelProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BottleLabelBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BottleLabelBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BottleLabelFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BottleLabelFill ref={ref} {...rest} />;
  if (duotone) return <BottleLabelRegularDuotone ref={ref} {...rest} />;
  return <BottleLabelRegular ref={ref} {...rest} />;
}));

BottleLabel.displayName = 'BottleLabel';

export { BottleLabel };
