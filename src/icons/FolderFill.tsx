import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FolderFillProps = Omit<IconBaseProps, 'children'>;

const FolderFill = memo(
  forwardRef<SVGSVGElement, FolderFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.93 3a3 3 0 0 1 2.5 1.34l.8 1.21a1 1 0 0 0 .84.45H20a3 3 0 0 1 3 3v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V6a3 3 0 0 1 3-3zM4 5a1 1 0 0 0-1 1v4h18V9a1 1 0 0 0-1-1h-6.93a3 3 0 0 1-2.5-1.34l-.8-1.21A1 1 0 0 0 8.92 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderFill.displayName = 'FolderFill';

// Triple export pattern (lucide-react style)
export { FolderFill, FolderFill as FolderFillIcon, FolderFill as SiFolderFill };
export type { FolderFillProps };
