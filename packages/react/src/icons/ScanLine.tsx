import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanLineRegular } from './ScanLineRegular';
import { ScanLineRegularDuotone } from './ScanLineRegularDuotone';
import { ScanLineBold } from './ScanLineBold';
import { ScanLineBoldDuotone } from './ScanLineBoldDuotone';
import { ScanLineFill } from './ScanLineFill';
import { ScanLineFillDuotone } from './ScanLineFillDuotone';

export interface ScanLineProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanLine with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ScanLineRegular } from 'stera-icons/ScanLineRegular';
 */
const ScanLine = memo(forwardRef<SVGSVGElement, ScanLineProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanLineBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanLineBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanLineFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanLineFill ref={ref} {...rest} />;
  if (duotone) return <ScanLineRegularDuotone ref={ref} {...rest} />;
  return <ScanLineRegular ref={ref} {...rest} />;
}));

ScanLine.displayName = 'ScanLine';

export { ScanLine };
