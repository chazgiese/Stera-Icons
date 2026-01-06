import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { IdVIcon as RegularIdVIcon } from './id-v';
import { IdVIconDuotone as IdVIconDuotone } from './id-v-duotone';
import { IdVIconBold as IdVIconBold } from './id-v-bold';
import { IdVIconBoldDuotone as IdVIconBoldDuotone } from './id-v-bold-duotone';
import { IdVIconFill as IdVIconFill } from './id-v-fill';
import { IdVIconFillDuotone as IdVIconFillDuotone } from './id-v-fill-duotone';

export interface IdVIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const IdVIcon = memo(forwardRef<SVGSVGElement, IdVIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <IdVIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <IdVIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <IdVIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <IdVIconFill ref={ref} {...props} />;
  if (duotone) return <IdVIconDuotone ref={ref} {...props} />;
  return <RegularIdVIcon ref={ref} {...props} />;
}));

IdVIcon.displayName = 'IdVIcon';

export { IdVIcon };
