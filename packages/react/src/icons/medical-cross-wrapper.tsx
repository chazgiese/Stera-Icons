import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MedicalCrossIcon as RegularMedicalCrossIcon } from './medical-cross';
import { MedicalCrossIconBold } from './medical-cross-bold';
import { MedicalCrossIconFilled } from './medical-cross-filled';
import { MedicalCrossIconFilltone } from './medical-cross-filltone';
import { MedicalCrossIconLinetone } from './medical-cross-linetone';

export interface MedicalCrossIconProps extends IconProps {
  variant?: IconVariant;
}

const MedicalCrossIcon = memo(forwardRef<SVGSVGElement, MedicalCrossIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MedicalCrossIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MedicalCrossIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MedicalCrossIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MedicalCrossIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMedicalCrossIcon ref={ref} {...props} />;
  }
}));

MedicalCrossIcon.displayName = 'MedicalCrossIcon';

export { MedicalCrossIcon };
