import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FolderBoldProps = Omit<IconBaseProps, 'children'>;

const FolderBold = memo(
  forwardRef<SVGSVGElement, FolderBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.93 3a3 3 0 0 1 2.5 1.34l.8 1.21a1 1 0 0 0 .84.45H20a3 3 0 0 1 3 3v8a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V6a3 3 0 0 1 3-3zM3 12v5c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-5zm1-7a1 1 0 0 0-1 1v4h18V9a1 1 0 0 0-1-1h-6.93a3 3 0 0 1-2.5-1.34l-.8-1.21A1 1 0 0 0 8.92 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderBold.displayName = 'FolderBold';

// Triple export pattern (lucide-react style)
export { FolderBold, FolderBold as FolderBoldIcon, FolderBold as SiFolderBold };
export default FolderBold;
export type { FolderBoldProps };
