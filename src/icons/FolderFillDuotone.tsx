import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FolderFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderFillDuotone = memo(
  forwardRef<SVGSVGElement, FolderFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-fill-duotone" {...props}>
      <path fill="currentColor" d="M8.93 3a3 3 0 0 1 2.5 1.34l.8 1.21a1 1 0 0 0 .84.45H20a3 3 0 0 1 3 3v2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1V6a3 3 0 0 1 3-3z" opacity={.4} />
        <path fill="currentColor" d="M22 10a1 1 0 0 1 1 1v6a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-6a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

FolderFillDuotone.displayName = 'FolderFillDuotone';

// Triple export pattern (lucide-react style)
export { FolderFillDuotone, FolderFillDuotone as FolderFillDuotoneIcon, FolderFillDuotone as SiFolderFillDuotone };
export default FolderFillDuotone;
export type { FolderFillDuotoneProps };
