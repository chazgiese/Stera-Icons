import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowBigLeftRegular } from './ArrowBigLeftRegular';
import { ArrowBigLeftRegularDuotone } from './ArrowBigLeftRegularDuotone';
import { ArrowBigLeftBold } from './ArrowBigLeftBold';
import { ArrowBigLeftBoldDuotone } from './ArrowBigLeftBoldDuotone';
import { ArrowBigLeftFill } from './ArrowBigLeftFill';
import { ArrowBigLeftFillDuotone } from './ArrowBigLeftFillDuotone';

export interface ArrowBigLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowBigLeft with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowBigLeftRegular } from 'stera-icons/ArrowBigLeftRegular';
 */
const ArrowBigLeft = memo(forwardRef<SVGSVGElement, ArrowBigLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowBigLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowBigLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowBigLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowBigLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowBigLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowBigLeftRegular ref={ref} {...rest} />;
}));

ArrowBigLeft.displayName = 'ArrowBigLeft';

export { ArrowBigLeft };
