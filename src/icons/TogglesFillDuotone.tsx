import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TogglesFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TogglesFillDuotone = memo(
  forwardRef<SVGSVGElement, TogglesFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="toggles-fill-duotone" {...props}>
      <path d="M16 12.75a5 5 0 0 1 0 10H8a5 5 0 0 1 0-10zm-8 2a3 3 0 1 0 0 6h8a3 3 0 1 0 0-6zM16 1.25a5 5 0 0 1 0 10H8a5 5 0 0 1 0-10zm0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4" opacity={0.4} />
        <path d="M8 15.75a2 2 0 1 1 0 4 2 2 0 0 1 0-4M16 4.25a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

TogglesFillDuotone.displayName = 'TogglesFillDuotone';

// Triple export pattern (lucide-react style)
export { TogglesFillDuotone, TogglesFillDuotone as TogglesFillDuotoneIcon, TogglesFillDuotone as SiTogglesFillDuotone };
export default TogglesFillDuotone;
export type { TogglesFillDuotoneProps };
