import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FileCabinetIcon as FileCabinetIconRegular } from './file-cabinet';
import { FileCabinetIconBold } from './file-cabinet-bold';
import { FileCabinetIconFilled } from './file-cabinet-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FileCabinetIconProps extends IconProps {
  variant?: IconVariant;
}

const FileCabinetIcon = memo(forwardRef<SVGSVGElement, FileCabinetIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FileCabinetIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FileCabinetIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FileCabinetIconRegular ref={ref} {...props} />;
  }
}));

FileCabinetIcon.displayName = 'FileCabinetIcon';

export { FileCabinetIcon };
