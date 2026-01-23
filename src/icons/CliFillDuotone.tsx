import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliFillDuotone = memo(
  forwardRef<SVGSVGElement, CliFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli-fill-duotone" {...props}>
      <path fill="currentColor" d="M22 17.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path fill="currentColor" d="M1.94 3.94a1.5 1.5 0 0 1 2.12 0l7 7a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 0 1-2.12-2.12L7.88 12 1.94 6.06a1.5 1.5 0 0 1 0-2.12" />
    </IconBase>
  ))
);

CliFillDuotone.displayName = 'CliFillDuotone';

// Triple export pattern (lucide-react style)
export { CliFillDuotone, CliFillDuotone as CliFillDuotoneIcon, CliFillDuotone as SiCliFillDuotone };
export default CliFillDuotone;
export type { CliFillDuotoneProps };
