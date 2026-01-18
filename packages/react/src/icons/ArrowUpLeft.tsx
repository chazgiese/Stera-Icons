import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowUpLeftRegular } from './ArrowUpLeftRegular';
import { ArrowUpLeftRegularDuotone } from './ArrowUpLeftRegularDuotone';
import { ArrowUpLeftBold } from './ArrowUpLeftBold';
import { ArrowUpLeftBoldDuotone } from './ArrowUpLeftBoldDuotone';
import { ArrowUpLeftFill } from './ArrowUpLeftFill';
import { ArrowUpLeftFillDuotone } from './ArrowUpLeftFillDuotone';

export interface ArrowUpLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowUpLeft with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowUpLeftRegular } from 'stera-icons/ArrowUpLeftRegular';
 */
const ArrowUpLeft = memo(forwardRef<SVGSVGElement, ArrowUpLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowUpLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowUpLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowUpLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowUpLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowUpLeftRegular ref={ref} {...rest} />;
}));

ArrowUpLeft.displayName = 'ArrowUpLeft';

export { ArrowUpLeft };
