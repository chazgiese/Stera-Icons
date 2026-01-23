import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CloudXRegular } from './CloudXRegular.js';
import { CloudXRegularDuotone } from './CloudXRegularDuotone.js';
import { CloudXBold } from './CloudXBold.js';
import { CloudXBoldDuotone } from './CloudXBoldDuotone.js';
import { CloudXFill } from './CloudXFill.js';
import { CloudXFillDuotone } from './CloudXFillDuotone.js';

export interface CloudXProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CloudX - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CloudXRegular } from 'stera-icons/icons/CloudXRegular';
 */
const CloudX = memo(forwardRef<SVGSVGElement, CloudXProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CloudXBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CloudXBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CloudXFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CloudXFill ref={ref} {...rest} />;
  if (duotone) return <CloudXRegularDuotone ref={ref} {...rest} />;
  return <CloudXRegular ref={ref} {...rest} />;
}));

CloudX.displayName = 'CloudX';

// Triple export pattern (lucide-react style)
export { CloudX, CloudX as CloudXIcon, CloudX as SiCloudX };
export default CloudX;
