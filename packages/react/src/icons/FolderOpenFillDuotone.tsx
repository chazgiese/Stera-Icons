import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FolderOpenFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderOpenFillDuotone = memo(
  forwardRef<SVGSVGElement, FolderOpenFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.93 3a3 3 0 0 1 2.5 1.34l.8 1.21a1 1 0 0 0 .84.45h7.08a3 3 0 0 1 2.99 2.77l.06.85.01.47a2 2 0 0 0-.47-.09H5.72a2 2 0 0 0-1.9 1.37l-1.9 5.68A3 3 0 0 0 4.53 21a4 4 0 0 1-3.7-3.74L.14 6.19a3 3 0 0 1 3-3.19z" opacity={.4} />
        <path fill="currentColor" d="M21.74 10a2 2 0 0 1 1.77 2.63l-1.88 5.63a4 4 0 0 1-3.8 2.74H4.78a3 3 0 0 1-2.84-3.95l1.9-5.68A2 2 0 0 1 5.72 10h16.01" />
    </IconBase>
  ))
);

FolderOpenFillDuotone.displayName = 'FolderOpenFillDuotone';

// Triple export pattern (lucide-react style)
export { FolderOpenFillDuotone, FolderOpenFillDuotone as FolderOpenFillDuotoneIcon, FolderOpenFillDuotone as SiFolderOpenFillDuotone };
export type { FolderOpenFillDuotoneProps };
