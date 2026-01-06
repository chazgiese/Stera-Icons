import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MedicalCrossIcon as RegularMedicalCrossIcon } from './medical-cross';
import { MedicalCrossIconDuotone as MedicalCrossIconDuotone } from './medical-cross-duotone';
import { MedicalCrossIconBold as MedicalCrossIconBold } from './medical-cross-bold';
import { MedicalCrossIconBoldDuotone as MedicalCrossIconBoldDuotone } from './medical-cross-bold-duotone';
import { MedicalCrossIconFill as MedicalCrossIconFill } from './medical-cross-fill';
import { MedicalCrossIconFillDuotone as MedicalCrossIconFillDuotone } from './medical-cross-fill-duotone';

export interface MedicalCrossIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MedicalCrossIcon = memo(forwardRef<SVGSVGElement, MedicalCrossIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MedicalCrossIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MedicalCrossIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MedicalCrossIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MedicalCrossIconFill ref={ref} {...props} />;
  if (duotone) return <MedicalCrossIconDuotone ref={ref} {...props} />;
  return <RegularMedicalCrossIcon ref={ref} {...props} />;
}));

MedicalCrossIcon.displayName = 'MedicalCrossIcon';

export { MedicalCrossIcon };
