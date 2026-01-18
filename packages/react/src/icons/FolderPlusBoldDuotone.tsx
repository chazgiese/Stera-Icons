import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FolderPlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderPlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, FolderPlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 14a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1-1M4 5a1 1 0 0 0-1 1v4H2a1 1 0 0 0-1 1V6a3 3 0 0 1 3-3h4.93a3 3 0 0 1 2.5 1.34l.8 1.21a1 1 0 0 0 .84.45H20a3 3 0 0 1 3 3v2a1 1 0 0 0-1-1h-1V9a1 1 0 0 0-1-1h-6.93a3 3 0 0 1-2.5-1.34l-.8-1.21A1 1 0 0 0 8.92 5z" opacity={0.4} />
        <path fill="currentColor" d="M22 10a1 1 0 1 1 0 2H3v5c0 1.1.9 2 2 2h7a1 1 0 1 1 0 2H5a4 4 0 0 1-4-4v-6a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

FolderPlusBoldDuotone.displayName = 'FolderPlusBoldDuotone';

// Triple export pattern (lucide-react style)
export { FolderPlusBoldDuotone, FolderPlusBoldDuotone as FolderPlusBoldDuotoneIcon, FolderPlusBoldDuotone as SiFolderPlusBoldDuotone };
export type { FolderPlusBoldDuotoneProps };
