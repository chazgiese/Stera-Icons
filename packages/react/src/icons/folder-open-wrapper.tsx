import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FolderOpenIcon as RegularFolderOpenIcon } from './folder-open';
import { FolderOpenIconDuotone as FolderOpenIconDuotone } from './folder-open-duotone';
import { FolderOpenIconBold as FolderOpenIconBold } from './folder-open-bold';
import { FolderOpenIconBoldDuotone as FolderOpenIconBoldDuotone } from './folder-open-bold-duotone';
import { FolderOpenIconFill as FolderOpenIconFill } from './folder-open-fill';
import { FolderOpenIconFillDuotone as FolderOpenIconFillDuotone } from './folder-open-fill-duotone';

export interface FolderOpenIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FolderOpenIcon = memo(forwardRef<SVGSVGElement, FolderOpenIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FolderOpenIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FolderOpenIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FolderOpenIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FolderOpenIconFill ref={ref} {...props} />;
  if (duotone) return <FolderOpenIconDuotone ref={ref} {...props} />;
  return <RegularFolderOpenIcon ref={ref} {...props} />;
}));

FolderOpenIcon.displayName = 'FolderOpenIcon';

export { FolderOpenIcon };
