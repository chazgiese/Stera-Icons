import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanDashedRegular } from './ScanDashedRegular';
import { ScanDashedRegularDuotone } from './ScanDashedRegularDuotone';
import { ScanDashedBold } from './ScanDashedBold';
import { ScanDashedBoldDuotone } from './ScanDashedBoldDuotone';
import { ScanDashedFill } from './ScanDashedFill';
import { ScanDashedFillDuotone } from './ScanDashedFillDuotone';

export interface ScanDashedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanDashed with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ScanDashedRegular } from 'stera-icons/ScanDashedRegular';
 */
const ScanDashed = memo(forwardRef<SVGSVGElement, ScanDashedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanDashedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanDashedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanDashedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanDashedFill ref={ref} {...rest} />;
  if (duotone) return <ScanDashedRegularDuotone ref={ref} {...rest} />;
  return <ScanDashedRegular ref={ref} {...rest} />;
}));

ScanDashed.displayName = 'ScanDashed';

export { ScanDashed };
