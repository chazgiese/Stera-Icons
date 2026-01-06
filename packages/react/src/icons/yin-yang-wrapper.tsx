import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { YinYangIcon as RegularYinYangIcon } from './yin-yang';
import { YinYangIconDuotone as YinYangIconDuotone } from './yin-yang-duotone';
import { YinYangIconBold as YinYangIconBold } from './yin-yang-bold';
import { YinYangIconBoldDuotone as YinYangIconBoldDuotone } from './yin-yang-bold-duotone';
import { YinYangIconFill as YinYangIconFill } from './yin-yang-fill';
import { YinYangIconFillDuotone as YinYangIconFillDuotone } from './yin-yang-fill-duotone';

export interface YinYangIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const YinYangIcon = memo(forwardRef<SVGSVGElement, YinYangIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <YinYangIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <YinYangIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <YinYangIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <YinYangIconFill ref={ref} {...props} />;
  if (duotone) return <YinYangIconDuotone ref={ref} {...props} />;
  return <RegularYinYangIcon ref={ref} {...props} />;
}));

YinYangIcon.displayName = 'YinYangIcon';

export { YinYangIcon };
