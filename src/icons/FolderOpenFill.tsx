import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderOpenFillProps = Omit<IconBaseProps, 'children'>;

const FolderOpenFill = memo(
  forwardRef<SVGSVGElement, FolderOpenFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-open-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7.93 3a3 3 0 0 1 2.5 1.34l.8 1.21a1 1 0 0 0 .84.45h7.08a3 3 0 0 1 2.99 2.77l.06.85.01.47a2 2 0 0 1 1.3 2.54l-1.88 5.63a4 4 0 0 1-3.8 2.74H4.78l-.25-.01a4 4 0 0 1-3.7-3.74L.14 6.19a3 3 0 0 1 3-3.19zm-4.8 2a1 1 0 0 0-1 1.06l.55 8.74 1.14-3.43A2 2 0 0 1 5.72 10h14.5l-.01-.23-.07-.85a1 1 0 0 0-1-.92h-7.07a3 3 0 0 1-2.5-1.34l-.8-1.21A1 1 0 0 0 7.92 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderOpenFill.displayName = 'FolderOpenFill';

// Triple export pattern (lucide-react style)
export { FolderOpenFill, FolderOpenFill as FolderOpenFillIcon, FolderOpenFill as SiFolderOpenFill };
export default FolderOpenFill;
export type { FolderOpenFillProps };
