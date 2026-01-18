import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { IdVRegular } from './IdVRegular';
import { IdVRegularDuotone } from './IdVRegularDuotone';
import { IdVBold } from './IdVBold';
import { IdVBoldDuotone } from './IdVBoldDuotone';
import { IdVFill } from './IdVFill';
import { IdVFillDuotone } from './IdVFillDuotone';

export interface IdVProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * IdV with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { IdVRegular } from 'stera-icons/IdVRegular';
 */
const IdV = memo(forwardRef<SVGSVGElement, IdVProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <IdVBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <IdVBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <IdVFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <IdVFill ref={ref} {...rest} />;
  if (duotone) return <IdVRegularDuotone ref={ref} {...rest} />;
  return <IdVRegular ref={ref} {...rest} />;
}));

IdV.displayName = 'IdV';

export { IdV };
