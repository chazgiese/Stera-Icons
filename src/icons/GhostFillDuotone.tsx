import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GhostFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GhostFillDuotone = memo(
  forwardRef<SVGSVGElement, GhostFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="ghost-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a9 9 0 0 1 9 9v12a1 1 0 0 1-1.55.83l-2.4-1.6-1.93 1.55a1 1 0 0 1-1.24 0L12 21.28l-1.87 1.5a1 1 0 0 1-1.26 0l-1.92-1.54-2.4 1.6A1 1 0 0 1 3 22V10a9 9 0 0 1 9-9M9 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4M15 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

GhostFillDuotone.displayName = 'GhostFillDuotone';

// Triple export pattern (lucide-react style)
export { GhostFillDuotone, GhostFillDuotone as GhostFillDuotoneIcon, GhostFillDuotone as SiGhostFillDuotone };
export default GhostFillDuotone;
export type { GhostFillDuotoneProps };
