import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FastForwardRegular } from './FastForwardRegular';
import { FastForwardRegularDuotone } from './FastForwardRegularDuotone';
import { FastForwardBold } from './FastForwardBold';
import { FastForwardBoldDuotone } from './FastForwardBoldDuotone';
import { FastForwardFill } from './FastForwardFill';
import { FastForwardFillDuotone } from './FastForwardFillDuotone';

export interface FastForwardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FastForward with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { FastForwardRegular } from 'stera-icons/FastForwardRegular';
 */
const FastForward = memo(forwardRef<SVGSVGElement, FastForwardProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FastForwardBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FastForwardBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FastForwardFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FastForwardFill ref={ref} {...rest} />;
  if (duotone) return <FastForwardRegularDuotone ref={ref} {...rest} />;
  return <FastForwardRegular ref={ref} {...rest} />;
}));

FastForward.displayName = 'FastForward';

export { FastForward };
