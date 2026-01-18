import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CloudXRegular } from './CloudXRegular';
import { CloudXRegularDuotone } from './CloudXRegularDuotone';
import { CloudXBold } from './CloudXBold';
import { CloudXBoldDuotone } from './CloudXBoldDuotone';
import { CloudXFill } from './CloudXFill';
import { CloudXFillDuotone } from './CloudXFillDuotone';

export interface CloudXProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CloudX with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CloudXRegular } from 'stera-icons/CloudXRegular';
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

export { CloudX };
