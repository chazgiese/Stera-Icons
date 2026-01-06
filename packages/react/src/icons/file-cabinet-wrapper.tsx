import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FileCabinetIcon as RegularFileCabinetIcon } from './file-cabinet';
import { FileCabinetIconDuotone as FileCabinetIconDuotone } from './file-cabinet-duotone';
import { FileCabinetIconBold as FileCabinetIconBold } from './file-cabinet-bold';
import { FileCabinetIconBoldDuotone as FileCabinetIconBoldDuotone } from './file-cabinet-bold-duotone';
import { FileCabinetIconFill as FileCabinetIconFill } from './file-cabinet-fill';
import { FileCabinetIconFillDuotone as FileCabinetIconFillDuotone } from './file-cabinet-fill-duotone';

export interface FileCabinetIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FileCabinetIcon = memo(forwardRef<SVGSVGElement, FileCabinetIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FileCabinetIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FileCabinetIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FileCabinetIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FileCabinetIconFill ref={ref} {...props} />;
  if (duotone) return <FileCabinetIconDuotone ref={ref} {...props} />;
  return <RegularFileCabinetIcon ref={ref} {...props} />;
}));

FileCabinetIcon.displayName = 'FileCabinetIcon';

export { FileCabinetIcon };
