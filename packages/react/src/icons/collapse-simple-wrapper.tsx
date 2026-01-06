import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CollapseSimpleIcon as RegularCollapseSimpleIcon } from './collapse-simple';
import { CollapseSimpleIconDuotone as CollapseSimpleIconDuotone } from './collapse-simple-duotone';
import { CollapseSimpleIconBold as CollapseSimpleIconBold } from './collapse-simple-bold';
import { CollapseSimpleIconBoldDuotone as CollapseSimpleIconBoldDuotone } from './collapse-simple-bold-duotone';
import { CollapseSimpleIconFill as CollapseSimpleIconFill } from './collapse-simple-fill';
import { CollapseSimpleIconFillDuotone as CollapseSimpleIconFillDuotone } from './collapse-simple-fill-duotone';

export interface CollapseSimpleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CollapseSimpleIcon = memo(forwardRef<SVGSVGElement, CollapseSimpleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CollapseSimpleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CollapseSimpleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CollapseSimpleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CollapseSimpleIconFill ref={ref} {...props} />;
  if (duotone) return <CollapseSimpleIconDuotone ref={ref} {...props} />;
  return <RegularCollapseSimpleIcon ref={ref} {...props} />;
}));

CollapseSimpleIcon.displayName = 'CollapseSimpleIcon';

export { CollapseSimpleIcon };
