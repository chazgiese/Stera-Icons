import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleUpLeftRegular } from './ArrowCircleUpLeftRegular';
import { ArrowCircleUpLeftRegularDuotone } from './ArrowCircleUpLeftRegularDuotone';
import { ArrowCircleUpLeftBold } from './ArrowCircleUpLeftBold';
import { ArrowCircleUpLeftBoldDuotone } from './ArrowCircleUpLeftBoldDuotone';
import { ArrowCircleUpLeftFill } from './ArrowCircleUpLeftFill';
import { ArrowCircleUpLeftFillDuotone } from './ArrowCircleUpLeftFillDuotone';

export interface ArrowCircleUpLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowCircleUpLeft with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowCircleUpLeftRegular } from 'stera-icons/ArrowCircleUpLeftRegular';
 */
const ArrowCircleUpLeft = memo(forwardRef<SVGSVGElement, ArrowCircleUpLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCircleUpLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowCircleUpLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowCircleUpLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowCircleUpLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowCircleUpLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowCircleUpLeftRegular ref={ref} {...rest} />;
}));

ArrowCircleUpLeft.displayName = 'ArrowCircleUpLeft';

export { ArrowCircleUpLeft };
