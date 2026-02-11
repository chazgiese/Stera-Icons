import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderFillDuotone = memo(
  forwardRef<SVGSVGElement, FolderFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-fill-duotone" {...props}>
      <path d="M21.5 14.7q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.3q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74c-.25-.49-.35-1-.4-1.57q-.05-.82-.04-2.05V9.5h19z" />
        <path d="M9.17 3.5c.45 0 .83 0 1.2.08q.46.12.87.36c.33.2.6.48.9.8l.13.12c.38.37.46.45.54.5a1 1 0 0 0 .28.11c.1.02.2.03.74.03h3.47q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.51.03 1.2h-19V7.7q0-.81.03-1.4c.03-.39.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03z" opacity={.4} />
    </IconBase>
  ))
);

FolderFillDuotone.displayName = 'FolderFillDuotone';

// Triple export pattern (lucide-react style)
export { FolderFillDuotone, FolderFillDuotone as FolderFillDuotoneIcon, FolderFillDuotone as SiFolderFillDuotone };
export default FolderFillDuotone;
export type { FolderFillDuotoneProps };
