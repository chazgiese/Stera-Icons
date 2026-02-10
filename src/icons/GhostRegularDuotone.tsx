import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GhostRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GhostRegularDuotone = memo(
  forwardRef<SVGSVGElement, GhostRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="ghost-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25A8.75 8.75 0 0 1 20.75 11v10q0 .22-.13.42a.75.75 0 0 1-1.04.2l-2.54-1.7-2.07 1.67a.75.75 0 0 1-.94 0L12 19.96 9.97 21.6a.75.75 0 0 1-.94 0l-2.07-1.66-2.54 1.7A.75.75 0 0 1 3.25 21V11A8.75 8.75 0 0 1 12 2.25m0 1.5C8 3.75 4.75 7 4.75 11v8.6l1.83-1.22.1-.06a.8.8 0 0 1 .79.1l2.03 1.62 2.03-1.63.1-.07a.8.8 0 0 1 .84.07l2.03 1.63 2.03-1.63.1-.06a.8.8 0 0 1 .79.03l1.83 1.22V11c0-4-3.25-7.25-7.25-7.25" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9 9.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M15 9.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

GhostRegularDuotone.displayName = 'GhostRegularDuotone';

// Triple export pattern (lucide-react style)
export { GhostRegularDuotone, GhostRegularDuotone as GhostRegularDuotoneIcon, GhostRegularDuotone as SiGhostRegularDuotone };
export default GhostRegularDuotone;
export type { GhostRegularDuotoneProps };
