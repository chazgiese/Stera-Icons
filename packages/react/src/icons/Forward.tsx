import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ForwardRegular } from './ForwardRegular';
import { ForwardRegularDuotone } from './ForwardRegularDuotone';
import { ForwardBold } from './ForwardBold';
import { ForwardBoldDuotone } from './ForwardBoldDuotone';
import { ForwardFill } from './ForwardFill';
import { ForwardFillDuotone } from './ForwardFillDuotone';

export interface ForwardProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Forward with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ForwardRegular } from 'stera-icons/ForwardRegular';
 */
const Forward = memo(forwardRef<SVGSVGElement, ForwardProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ForwardBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ForwardBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ForwardFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ForwardFill ref={ref} {...rest} />;
  if (duotone) return <ForwardRegularDuotone ref={ref} {...rest} />;
  return <ForwardRegular ref={ref} {...rest} />;
}));

Forward.displayName = 'Forward';

export { Forward };
