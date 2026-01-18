import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowBigUpRegular } from './ArrowBigUpRegular';
import { ArrowBigUpRegularDuotone } from './ArrowBigUpRegularDuotone';
import { ArrowBigUpBold } from './ArrowBigUpBold';
import { ArrowBigUpBoldDuotone } from './ArrowBigUpBoldDuotone';
import { ArrowBigUpFill } from './ArrowBigUpFill';
import { ArrowBigUpFillDuotone } from './ArrowBigUpFillDuotone';

export interface ArrowBigUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowBigUp with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowBigUpRegular } from 'stera-icons/ArrowBigUpRegular';
 */
const ArrowBigUp = memo(forwardRef<SVGSVGElement, ArrowBigUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowBigUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowBigUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowBigUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowBigUpFill ref={ref} {...rest} />;
  if (duotone) return <ArrowBigUpRegularDuotone ref={ref} {...rest} />;
  return <ArrowBigUpRegular ref={ref} {...rest} />;
}));

ArrowBigUp.displayName = 'ArrowBigUp';

export { ArrowBigUp };
