import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlugIcon as RegularPlugIcon } from './plug';
import { PlugIconDuotone as PlugIconDuotone } from './plug-duotone';
import { PlugIconBold as PlugIconBold } from './plug-bold';
import { PlugIconBoldDuotone as PlugIconBoldDuotone } from './plug-bold-duotone';
import { PlugIconFill as PlugIconFill } from './plug-fill';
import { PlugIconFillDuotone as PlugIconFillDuotone } from './plug-fill-duotone';

export interface PlugIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PlugIcon = memo(forwardRef<SVGSVGElement, PlugIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlugIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PlugIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PlugIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PlugIconFill ref={ref} {...props} />;
  if (duotone) return <PlugIconDuotone ref={ref} {...props} />;
  return <RegularPlugIcon ref={ref} {...props} />;
}));

PlugIcon.displayName = 'PlugIcon';

export { PlugIcon };
