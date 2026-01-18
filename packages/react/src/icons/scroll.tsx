import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScrollRegular } from './ScrollRegular';
import { ScrollRegularDuotone } from './ScrollRegularDuotone';
import { ScrollBold } from './ScrollBold';
import { ScrollBoldDuotone } from './ScrollBoldDuotone';
import { ScrollFill } from './ScrollFill';
import { ScrollFillDuotone } from './ScrollFillDuotone';

export interface ScrollProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Scroll with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ScrollRegular } from 'stera-icons/ScrollRegular';
 */
const Scroll = memo(forwardRef<SVGSVGElement, ScrollProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScrollBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScrollBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScrollFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScrollFill ref={ref} {...rest} />;
  if (duotone) return <ScrollRegularDuotone ref={ref} {...rest} />;
  return <ScrollRegular ref={ref} {...rest} />;
}));

Scroll.displayName = 'Scroll';

export { Scroll };
