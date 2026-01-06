import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HomePlusIcon as RegularHomePlusIcon } from './home-plus';
import { HomePlusIconDuotone as HomePlusIconDuotone } from './home-plus-duotone';
import { HomePlusIconBold as HomePlusIconBold } from './home-plus-bold';
import { HomePlusIconBoldDuotone as HomePlusIconBoldDuotone } from './home-plus-bold-duotone';
import { HomePlusIconFill as HomePlusIconFill } from './home-plus-fill';
import { HomePlusIconFillDuotone as HomePlusIconFillDuotone } from './home-plus-fill-duotone';

export interface HomePlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HomePlusIcon = memo(forwardRef<SVGSVGElement, HomePlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HomePlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HomePlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HomePlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HomePlusIconFill ref={ref} {...props} />;
  if (duotone) return <HomePlusIconDuotone ref={ref} {...props} />;
  return <RegularHomePlusIcon ref={ref} {...props} />;
}));

HomePlusIcon.displayName = 'HomePlusIcon';

export { HomePlusIcon };
