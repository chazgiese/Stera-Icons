import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FolderPlusIcon as RegularFolderPlusIcon } from './folder-plus';
import { FolderPlusIconDuotone as FolderPlusIconDuotone } from './folder-plus-duotone';
import { FolderPlusIconBold as FolderPlusIconBold } from './folder-plus-bold';
import { FolderPlusIconBoldDuotone as FolderPlusIconBoldDuotone } from './folder-plus-bold-duotone';
import { FolderPlusIconFill as FolderPlusIconFill } from './folder-plus-fill';
import { FolderPlusIconFillDuotone as FolderPlusIconFillDuotone } from './folder-plus-fill-duotone';

export interface FolderPlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FolderPlusIcon = memo(forwardRef<SVGSVGElement, FolderPlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FolderPlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FolderPlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FolderPlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FolderPlusIconFill ref={ref} {...props} />;
  if (duotone) return <FolderPlusIconDuotone ref={ref} {...props} />;
  return <RegularFolderPlusIcon ref={ref} {...props} />;
}));

FolderPlusIcon.displayName = 'FolderPlusIcon';

export { FolderPlusIcon };
