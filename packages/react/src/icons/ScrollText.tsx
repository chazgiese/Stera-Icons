import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScrollTextRegular } from './ScrollTextRegular';
import { ScrollTextRegularDuotone } from './ScrollTextRegularDuotone';
import { ScrollTextBold } from './ScrollTextBold';
import { ScrollTextBoldDuotone } from './ScrollTextBoldDuotone';
import { ScrollTextFill } from './ScrollTextFill';
import { ScrollTextFillDuotone } from './ScrollTextFillDuotone';

export interface ScrollTextProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScrollText with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ScrollTextRegular } from 'stera-icons/ScrollTextRegular';
 */
const ScrollText = memo(forwardRef<SVGSVGElement, ScrollTextProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScrollTextBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScrollTextBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScrollTextFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScrollTextFill ref={ref} {...rest} />;
  if (duotone) return <ScrollTextRegularDuotone ref={ref} {...rest} />;
  return <ScrollTextRegular ref={ref} {...rest} />;
}));

ScrollText.displayName = 'ScrollText';

export { ScrollText };
