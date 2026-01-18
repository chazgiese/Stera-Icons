import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanTextRegular } from './ScanTextRegular';
import { ScanTextRegularDuotone } from './ScanTextRegularDuotone';
import { ScanTextBold } from './ScanTextBold';
import { ScanTextBoldDuotone } from './ScanTextBoldDuotone';
import { ScanTextFill } from './ScanTextFill';
import { ScanTextFillDuotone } from './ScanTextFillDuotone';

export interface ScanTextProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanText with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ScanTextRegular } from 'stera-icons/ScanTextRegular';
 */
const ScanText = memo(forwardRef<SVGSVGElement, ScanTextProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanTextBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanTextBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanTextFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanTextFill ref={ref} {...rest} />;
  if (duotone) return <ScanTextRegularDuotone ref={ref} {...rest} />;
  return <ScanTextRegular ref={ref} {...rest} />;
}));

ScanText.displayName = 'ScanText';

export { ScanText };
