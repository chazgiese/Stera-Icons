import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ComponentIcon as RegularComponentIcon } from './component';
import { ComponentIconDuotone as ComponentIconDuotone } from './component-duotone';
import { ComponentIconBold as ComponentIconBold } from './component-bold';
import { ComponentIconBoldDuotone as ComponentIconBoldDuotone } from './component-bold-duotone';
import { ComponentIconFill as ComponentIconFill } from './component-fill';
import { ComponentIconFillDuotone as ComponentIconFillDuotone } from './component-fill-duotone';

export interface ComponentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ComponentIcon = memo(forwardRef<SVGSVGElement, ComponentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ComponentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ComponentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ComponentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ComponentIconFill ref={ref} {...props} />;
  if (duotone) return <ComponentIconDuotone ref={ref} {...props} />;
  return <RegularComponentIcon ref={ref} {...props} />;
}));

ComponentIcon.displayName = 'ComponentIcon';

export { ComponentIcon };
