import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderPlusFillProps = Omit<IconBaseProps, 'children'>;

const FolderPlusFill = memo(
  forwardRef<SVGSVGElement, FolderPlusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-plus-fill" {...props}>
      <path fill="currentColor" d="M19 14a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M8.93 3a3 3 0 0 1 2.5 1.34l.8 1.21a1 1 0 0 0 .84.45H20a3 3 0 0 1 3 3v6.7q-.46-.2-1-.2h-.5V15a2.5 2.5 0 0 0-5 0v.5H16a2.5 2.5 0 0 0 0 5h.5v.5H5a4 4 0 0 1-4-4V6a3 3 0 0 1 3-3zM4 5a1 1 0 0 0-1 1v4h18V9a1 1 0 0 0-1-1h-6.93a3 3 0 0 1-2.5-1.34l-.8-1.21A1 1 0 0 0 8.92 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderPlusFill.displayName = 'FolderPlusFill';

// Triple export pattern (lucide-react style)
export { FolderPlusFill, FolderPlusFill as FolderPlusFillIcon, FolderPlusFill as SiFolderPlusFill };
export default FolderPlusFill;
export type { FolderPlusFillProps };
