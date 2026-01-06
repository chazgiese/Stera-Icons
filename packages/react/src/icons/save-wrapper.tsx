import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SaveIcon as RegularSaveIcon } from './save';
import { SaveIconDuotone as SaveIconDuotone } from './save-duotone';
import { SaveIconBold as SaveIconBold } from './save-bold';
import { SaveIconBoldDuotone as SaveIconBoldDuotone } from './save-bold-duotone';
import { SaveIconFill as SaveIconFill } from './save-fill';
import { SaveIconFillDuotone as SaveIconFillDuotone } from './save-fill-duotone';

export interface SaveIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SaveIcon = memo(forwardRef<SVGSVGElement, SaveIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SaveIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SaveIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SaveIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SaveIconFill ref={ref} {...props} />;
  if (duotone) return <SaveIconDuotone ref={ref} {...props} />;
  return <RegularSaveIcon ref={ref} {...props} />;
}));

SaveIcon.displayName = 'SaveIcon';

export { SaveIcon };
