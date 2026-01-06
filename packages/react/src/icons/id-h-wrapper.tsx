import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { IdHIcon as RegularIdHIcon } from './id-h';
import { IdHIconDuotone as IdHIconDuotone } from './id-h-duotone';
import { IdHIconBold as IdHIconBold } from './id-h-bold';
import { IdHIconBoldDuotone as IdHIconBoldDuotone } from './id-h-bold-duotone';
import { IdHIconFill as IdHIconFill } from './id-h-fill';
import { IdHIconFillDuotone as IdHIconFillDuotone } from './id-h-fill-duotone';

export interface IdHIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const IdHIcon = memo(forwardRef<SVGSVGElement, IdHIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <IdHIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <IdHIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <IdHIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <IdHIconFill ref={ref} {...props} />;
  if (duotone) return <IdHIconDuotone ref={ref} {...props} />;
  return <RegularIdHIcon ref={ref} {...props} />;
}));

IdHIcon.displayName = 'IdHIcon';

export { IdHIcon };
