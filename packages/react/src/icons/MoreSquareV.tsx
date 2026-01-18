import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreSquareVRegular } from './MoreSquareVRegular';
import { MoreSquareVRegularDuotone } from './MoreSquareVRegularDuotone';
import { MoreSquareVBold } from './MoreSquareVBold';
import { MoreSquareVBoldDuotone } from './MoreSquareVBoldDuotone';
import { MoreSquareVFill } from './MoreSquareVFill';
import { MoreSquareVFillDuotone } from './MoreSquareVFillDuotone';

export interface MoreSquareVProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MoreSquareV with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { MoreSquareVRegular } from 'stera-icons/MoreSquareVRegular';
 */
const MoreSquareV = memo(forwardRef<SVGSVGElement, MoreSquareVProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoreSquareVBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MoreSquareVBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MoreSquareVFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MoreSquareVFill ref={ref} {...rest} />;
  if (duotone) return <MoreSquareVRegularDuotone ref={ref} {...rest} />;
  return <MoreSquareVRegular ref={ref} {...rest} />;
}));

MoreSquareV.displayName = 'MoreSquareV';

export { MoreSquareV };
