import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FolderOpenBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderOpenBoldDuotone = memo(
  forwardRef<SVGSVGElement, FolderOpenBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-open-bold-duotone" {...props}>
      <path fill="currentColor" d="M7.93 3a3 3 0 0 1 2.5 1.34l.8 1.21a1 1 0 0 0 .84.45h7.08a3 3 0 0 1 2.99 2.77l.11 1.46q-.38-.19-.84-.23h-1.18l-.09-1.08a1 1 0 0 0-1-.92h-7.07a3 3 0 0 1-2.5-1.34l-.8-1.21A1 1 0 0 0 7.92 5h-4.8a1 1 0 0 0-1 1.06l.55 8.75-.75 2.24A3 3 0 0 0 4.52 21a4 4 0 0 1-3.7-3.74L.14 6.19a3 3 0 0 1 3-3.19z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M21.4 10a2.25 2.25 0 0 1 2 2.96l-1.77 5.3a4 4 0 0 1-3.8 2.74H4.78a3 3 0 0 1-2.84-3.95l1.84-5.51A2.25 2.25 0 0 1 5.9 10h15.51M5.83 12.01a.3.3 0 0 0-.16.16l-1.83 5.51A1 1 0 0 0 4.77 19h13.07a2 2 0 0 0 1.9-1.37l1.76-5.3a.25.25 0 0 0-.17-.32l-.06-.01H5.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderOpenBoldDuotone.displayName = 'FolderOpenBoldDuotone';

// Triple export pattern (lucide-react style)
export { FolderOpenBoldDuotone, FolderOpenBoldDuotone as FolderOpenBoldDuotoneIcon, FolderOpenBoldDuotone as SiFolderOpenBoldDuotone };
export default FolderOpenBoldDuotone;
export type { FolderOpenBoldDuotoneProps };
