import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanFaceRegular } from './ScanFaceRegular';
import { ScanFaceRegularDuotone } from './ScanFaceRegularDuotone';
import { ScanFaceBold } from './ScanFaceBold';
import { ScanFaceBoldDuotone } from './ScanFaceBoldDuotone';
import { ScanFaceFill } from './ScanFaceFill';
import { ScanFaceFillDuotone } from './ScanFaceFillDuotone';

export interface ScanFaceProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanFace - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ScanFaceRegular } from 'stera-icons/ScanFaceRegular';
 */
const ScanFace = memo(forwardRef<SVGSVGElement, ScanFaceProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanFaceBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanFaceBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanFaceFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanFaceFill ref={ref} {...rest} />;
  if (duotone) return <ScanFaceRegularDuotone ref={ref} {...rest} />;
  return <ScanFaceRegular ref={ref} {...rest} />;
}));

ScanFace.displayName = 'ScanFace';

// Triple export pattern (lucide-react style)
export { ScanFace, ScanFace as ScanFaceIcon, ScanFace as SiScanFace };
