import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FolderPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, FolderPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 14a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1-1M8.93 3a3 3 0 0 1 2.5 1.34l.8 1.21a1 1 0 0 0 .84.45H20a3 3 0 0 1 3 3v2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1V6a3 3 0 0 1 3-3z" />
        <path fill="currentColor" d="M22 10a1 1 0 0 1 1 1v4.7q-.46-.2-1-.2h-.5V15a2.5 2.5 0 0 0-5 0v.5H16a2.5 2.5 0 0 0 0 5h.5v.5H5a4 4 0 0 1-4-4v-6a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

FolderPlusFillDuotone.displayName = 'FolderPlusFillDuotone';

export { FolderPlusFillDuotone };
export type { FolderPlusFillDuotoneProps };
