import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareUpLeftRegular } from './ArrowSquareUpLeftRegular';
import { ArrowSquareUpLeftRegularDuotone } from './ArrowSquareUpLeftRegularDuotone';
import { ArrowSquareUpLeftBold } from './ArrowSquareUpLeftBold';
import { ArrowSquareUpLeftBoldDuotone } from './ArrowSquareUpLeftBoldDuotone';
import { ArrowSquareUpLeftFill } from './ArrowSquareUpLeftFill';
import { ArrowSquareUpLeftFillDuotone } from './ArrowSquareUpLeftFillDuotone';

export interface ArrowSquareUpLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowSquareUpLeft with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowSquareUpLeftRegular } from 'stera-icons/ArrowSquareUpLeftRegular';
 */
const ArrowSquareUpLeft = memo(forwardRef<SVGSVGElement, ArrowSquareUpLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareUpLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowSquareUpLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowSquareUpLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowSquareUpLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowSquareUpLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowSquareUpLeftRegular ref={ref} {...rest} />;
}));

ArrowSquareUpLeft.displayName = 'ArrowSquareUpLeft';

export { ArrowSquareUpLeft };
