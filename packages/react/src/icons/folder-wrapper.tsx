import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FolderIcon as RegularFolderIcon } from './folder';
import { FolderIconDuotone as FolderIconDuotone } from './folder-duotone';
import { FolderIconBold as FolderIconBold } from './folder-bold';
import { FolderIconBoldDuotone as FolderIconBoldDuotone } from './folder-bold-duotone';
import { FolderIconFill as FolderIconFill } from './folder-fill';
import { FolderIconFillDuotone as FolderIconFillDuotone } from './folder-fill-duotone';

export interface FolderIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FolderIcon = memo(forwardRef<SVGSVGElement, FolderIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FolderIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FolderIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FolderIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FolderIconFill ref={ref} {...props} />;
  if (duotone) return <FolderIconDuotone ref={ref} {...props} />;
  return <RegularFolderIcon ref={ref} {...props} />;
}));

FolderIcon.displayName = 'FolderIcon';

export { FolderIcon };
