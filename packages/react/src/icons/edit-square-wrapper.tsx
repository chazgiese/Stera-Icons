import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EditSquareIcon as RegularEditSquareIcon } from './edit-square';
import { EditSquareIconDuotone as EditSquareIconDuotone } from './edit-square-duotone';
import { EditSquareIconBold as EditSquareIconBold } from './edit-square-bold';
import { EditSquareIconBoldDuotone as EditSquareIconBoldDuotone } from './edit-square-bold-duotone';
import { EditSquareIconFill as EditSquareIconFill } from './edit-square-fill';
import { EditSquareIconFillDuotone as EditSquareIconFillDuotone } from './edit-square-fill-duotone';

export interface EditSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const EditSquareIcon = memo(forwardRef<SVGSVGElement, EditSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <EditSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <EditSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <EditSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <EditSquareIconFill ref={ref} {...props} />;
  if (duotone) return <EditSquareIconDuotone ref={ref} {...props} />;
  return <RegularEditSquareIcon ref={ref} {...props} />;
}));

EditSquareIcon.displayName = 'EditSquareIcon';

export { EditSquareIcon };
