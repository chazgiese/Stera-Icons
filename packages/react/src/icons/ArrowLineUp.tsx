import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLineUpRegular } from './ArrowLineUpRegular';
import { ArrowLineUpRegularDuotone } from './ArrowLineUpRegularDuotone';
import { ArrowLineUpBold } from './ArrowLineUpBold';
import { ArrowLineUpBoldDuotone } from './ArrowLineUpBoldDuotone';
import { ArrowLineUpFill } from './ArrowLineUpFill';
import { ArrowLineUpFillDuotone } from './ArrowLineUpFillDuotone';

export interface ArrowLineUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowLineUp with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowLineUpRegular } from 'stera-icons/ArrowLineUpRegular';
 */
const ArrowLineUp = memo(forwardRef<SVGSVGElement, ArrowLineUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowLineUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowLineUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowLineUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowLineUpFill ref={ref} {...rest} />;
  if (duotone) return <ArrowLineUpRegularDuotone ref={ref} {...rest} />;
  return <ArrowLineUpRegular ref={ref} {...rest} />;
}));

ArrowLineUp.displayName = 'ArrowLineUp';

export { ArrowLineUp };
