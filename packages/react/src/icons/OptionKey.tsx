import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { OptionKeyRegular } from './OptionKeyRegular';
import { OptionKeyRegularDuotone } from './OptionKeyRegularDuotone';
import { OptionKeyBold } from './OptionKeyBold';
import { OptionKeyBoldDuotone } from './OptionKeyBoldDuotone';
import { OptionKeyFill } from './OptionKeyFill';
import { OptionKeyFillDuotone } from './OptionKeyFillDuotone';

export interface OptionKeyProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * OptionKey with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { OptionKeyRegular } from 'stera-icons/OptionKeyRegular';
 */
const OptionKey = memo(forwardRef<SVGSVGElement, OptionKeyProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <OptionKeyBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <OptionKeyBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <OptionKeyFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <OptionKeyFill ref={ref} {...rest} />;
  if (duotone) return <OptionKeyRegularDuotone ref={ref} {...rest} />;
  return <OptionKeyRegular ref={ref} {...rest} />;
}));

OptionKey.displayName = 'OptionKey';

export { OptionKey };
