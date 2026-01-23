import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderBoldDuotone = memo(
  forwardRef<SVGSVGElement, FolderBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-bold-duotone" {...props}>
      <path fill="currentColor" d="M4 5a1 1 0 0 0-1 1v4H2a1 1 0 0 0-1 1V6a3 3 0 0 1 3-3h4.93a3 3 0 0 1 2.5 1.34l.8 1.21a1 1 0 0 0 .84.45H20a3 3 0 0 1 3 3v2a1 1 0 0 0-1-1h-1V9a1 1 0 0 0-1-1h-6.93a3 3 0 0 1-2.5-1.34l-.8-1.21A1 1 0 0 0 8.92 5z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M22 10a1 1 0 0 1 1 1v6a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-6a1 1 0 0 1 1-1zM3 17c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-5H3z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderBoldDuotone.displayName = 'FolderBoldDuotone';

// Triple export pattern (lucide-react style)
export { FolderBoldDuotone, FolderBoldDuotone as FolderBoldDuotoneIcon, FolderBoldDuotone as SiFolderBoldDuotone };
export default FolderBoldDuotone;
export type { FolderBoldDuotoneProps };
