import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlagRegular } from './FlagRegular';
import { FlagRegularDuotone } from './FlagRegularDuotone';
import { FlagBold } from './FlagBold';
import { FlagBoldDuotone } from './FlagBoldDuotone';
import { FlagFill } from './FlagFill';
import { FlagFillDuotone } from './FlagFillDuotone';

export interface FlagProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Flag with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { FlagRegular } from 'stera-icons/FlagRegular';
 */
const Flag = memo(forwardRef<SVGSVGElement, FlagProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlagBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlagBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlagFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlagFill ref={ref} {...rest} />;
  if (duotone) return <FlagRegularDuotone ref={ref} {...rest} />;
  return <FlagRegular ref={ref} {...rest} />;
}));

Flag.displayName = 'Flag';

export { Flag };
