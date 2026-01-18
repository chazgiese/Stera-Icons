import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FolderTreeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderTreeFillDuotone = memo(
  forwardRef<SVGSVGElement, FolderTreeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 2a1 1 0 0 1 1 1v1.5C4 5.33 4.67 6 5.5 6H9a1 1 0 0 1 0 2H5.5Q4.68 8 4 7.66v7.99A1.5 1.5 0 0 0 5.5 17H9a1 1 0 1 1 0 2H5.5A3.5 3.5 0 0 1 2 15.68V5l.02-.17L2 4.5V3a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" d="M14.96 13a2 2 0 0 1 1.67.9l.4.6H20a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-5c0-1.1.9-2 2-2zM14.96 2a2 2 0 0 1 1.67.9l.4.6H20a2 2 0 0 1 2 2V9a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

FolderTreeFillDuotone.displayName = 'FolderTreeFillDuotone';

export { FolderTreeFillDuotone };
export type { FolderTreeFillDuotoneProps };
