import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CloudRegular } from './CloudRegular';
import { CloudRegularDuotone } from './CloudRegularDuotone';
import { CloudBold } from './CloudBold';
import { CloudBoldDuotone } from './CloudBoldDuotone';
import { CloudFill } from './CloudFill';
import { CloudFillDuotone } from './CloudFillDuotone';

export interface CloudProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Cloud - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CloudRegular } from 'stera-icons/CloudRegular';
 */
const Cloud = memo(forwardRef<SVGSVGElement, CloudProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CloudBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CloudBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CloudFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CloudFill ref={ref} {...rest} />;
  if (duotone) return <CloudRegularDuotone ref={ref} {...rest} />;
  return <CloudRegular ref={ref} {...rest} />;
}));

Cloud.displayName = 'Cloud';

// Triple export pattern (lucide-react style)
export { Cloud, Cloud as CloudIcon, Cloud as SiCloud };
