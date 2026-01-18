import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { XRegular } from './XRegular';
import { XRegularDuotone } from './XRegularDuotone';
import { XBold } from './XBold';
import { XBoldDuotone } from './XBoldDuotone';
import { XFill } from './XFill';
import { XFillDuotone } from './XFillDuotone';

export interface XProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * X with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { XRegular } from 'stera-icons/XRegular';
 */
const X = memo(forwardRef<SVGSVGElement, XProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <XBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <XBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <XFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <XFill ref={ref} {...rest} />;
  if (duotone) return <XRegularDuotone ref={ref} {...rest} />;
  return <XRegular ref={ref} {...rest} />;
}));

X.displayName = 'X';

export { X };
