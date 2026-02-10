import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, FolderPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-plus-fill-duotone" {...props}>
      <path fill="currentColor" d="m21.5 14.7-.01 1.42A1 1 0 0 0 21 16h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 .12.49l-1.42.01H8.3q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57q-.05-.82-.04-2.05V10h19z" opacity={.4} />
        <path fill="currentColor" d="M18 13a1 1 0 0 1 1 1v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1-1M9.17 3.5c.45 0 .83 0 1.2.08q.46.12.87.36c.33.2.6.48.9.8l.13.12c.38.37.46.45.54.5a1 1 0 0 0 .28.11c.1.02.2.03.74.03H18q.62-.01 1.09.06a3 3 0 0 1 2.35 2.36q.08.45.06 1.08v1h-19V7.7q0-.81.03-1.4c.03-.39.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03z" />
    </IconBase>
  ))
);

FolderPlusFillDuotone.displayName = 'FolderPlusFillDuotone';

// Triple export pattern (lucide-react style)
export { FolderPlusFillDuotone, FolderPlusFillDuotone as FolderPlusFillDuotoneIcon, FolderPlusFillDuotone as SiFolderPlusFillDuotone };
export default FolderPlusFillDuotone;
export type { FolderPlusFillDuotoneProps };
