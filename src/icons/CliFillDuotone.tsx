import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliFillDuotone = memo(
  forwardRef<SVGSVGElement, CliFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli-fill-duotone" {...props}>
      <path d="M20 17a1.5 1.5 0 0 1 0 3h-9a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path d="M2.94 4.44a1.5 1.5 0 0 1 2.12 0l6 6a1.5 1.5 0 0 1 0 2.12l-6 6a1.5 1.5 0 0 1-2.12-2.12l4.94-4.94-4.94-4.94a1.5 1.5 0 0 1 0-2.12" />
    </IconBase>
  ))
);

CliFillDuotone.displayName = 'CliFillDuotone';

// Triple export pattern (lucide-react style)
export { CliFillDuotone, CliFillDuotone as CliFillDuotoneIcon, CliFillDuotone as SiCliFillDuotone };
export default CliFillDuotone;
export type { CliFillDuotoneProps };
