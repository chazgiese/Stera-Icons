import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { YinYangRegular } from './YinYangRegular';
import { YinYangRegularDuotone } from './YinYangRegularDuotone';
import { YinYangBold } from './YinYangBold';
import { YinYangBoldDuotone } from './YinYangBoldDuotone';
import { YinYangFill } from './YinYangFill';
import { YinYangFillDuotone } from './YinYangFillDuotone';

export interface YinYangProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * YinYang with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { YinYangRegular } from 'stera-icons/YinYangRegular';
 */
const YinYang = memo(forwardRef<SVGSVGElement, YinYangProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <YinYangBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <YinYangBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <YinYangFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <YinYangFill ref={ref} {...rest} />;
  if (duotone) return <YinYangRegularDuotone ref={ref} {...rest} />;
  return <YinYangRegular ref={ref} {...rest} />;
}));

YinYang.displayName = 'YinYang';

export { YinYang };
