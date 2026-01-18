import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FolderOpenBoldProps = Omit<IconBaseProps, 'children'>;

const FolderOpenBold = memo(
  forwardRef<SVGSVGElement, FolderOpenBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7.93 3a3 3 0 0 1 2.5 1.34l.8 1.21a1 1 0 0 0 .84.45h7.08a3 3 0 0 1 2.99 2.77l.11 1.46a2.25 2.25 0 0 1 1.15 2.73l-1.77 5.3a4 4 0 0 1-3.8 2.74H4.78l-.25-.01a4 4 0 0 1-3.7-3.74L.14 6.19a3 3 0 0 1 3-3.19zm-2.1 9.01a.3.3 0 0 0-.17.16l-1.83 5.51A1 1 0 0 0 4.82 19h13.02a2 2 0 0 0 1.9-1.37l1.76-5.3a.25.25 0 0 0-.17-.32l-.06-.01H5.9zM3.12 5a1 1 0 0 0-1 1.06l.55 8.75 1.09-3.27A2.25 2.25 0 0 1 5.9 10h14.33l-.09-1.08a1 1 0 0 0-1-.92h-7.07a3 3 0 0 1-2.5-1.34l-.8-1.21A1 1 0 0 0 7.92 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderOpenBold.displayName = 'FolderOpenBold';

// Triple export pattern (lucide-react style)
export { FolderOpenBold, FolderOpenBold as FolderOpenBoldIcon, FolderOpenBold as SiFolderOpenBold };
export type { FolderOpenBoldProps };
