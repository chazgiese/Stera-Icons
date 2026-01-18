import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BaseballRegular } from './BaseballRegular';
import { BaseballRegularDuotone } from './BaseballRegularDuotone';
import { BaseballBold } from './BaseballBold';
import { BaseballBoldDuotone } from './BaseballBoldDuotone';
import { BaseballFill } from './BaseballFill';
import { BaseballFillDuotone } from './BaseballFillDuotone';

export interface BaseballProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Baseball with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BaseballRegular } from 'stera-icons/BaseballRegular';
 */
const Baseball = memo(forwardRef<SVGSVGElement, BaseballProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BaseballBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BaseballBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BaseballFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BaseballFill ref={ref} {...rest} />;
  if (duotone) return <BaseballRegularDuotone ref={ref} {...rest} />;
  return <BaseballRegular ref={ref} {...rest} />;
}));

Baseball.displayName = 'Baseball';

export { Baseball };
