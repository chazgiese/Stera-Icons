import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CollapseSimpleAltIcon as RegularCollapseSimpleAltIcon } from './collapse-simple-alt';
import { CollapseSimpleAltIconDuotone as CollapseSimpleAltIconDuotone } from './collapse-simple-alt-duotone';
import { CollapseSimpleAltIconBold as CollapseSimpleAltIconBold } from './collapse-simple-alt-bold';
import { CollapseSimpleAltIconBoldDuotone as CollapseSimpleAltIconBoldDuotone } from './collapse-simple-alt-bold-duotone';
import { CollapseSimpleAltIconFill as CollapseSimpleAltIconFill } from './collapse-simple-alt-fill';
import { CollapseSimpleAltIconFillDuotone as CollapseSimpleAltIconFillDuotone } from './collapse-simple-alt-fill-duotone';

export interface CollapseSimpleAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CollapseSimpleAltIcon = memo(forwardRef<SVGSVGElement, CollapseSimpleAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CollapseSimpleAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CollapseSimpleAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CollapseSimpleAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CollapseSimpleAltIconFill ref={ref} {...props} />;
  if (duotone) return <CollapseSimpleAltIconDuotone ref={ref} {...props} />;
  return <RegularCollapseSimpleAltIcon ref={ref} {...props} />;
}));

CollapseSimpleAltIcon.displayName = 'CollapseSimpleAltIcon';

export { CollapseSimpleAltIcon };
