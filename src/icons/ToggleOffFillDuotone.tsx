import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToggleOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToggleOffFillDuotone = memo(
  forwardRef<SVGSVGElement, ToggleOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="toggle-off-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M15 4a8 8 0 1 1 0 16H9A8 8 0 1 1 9 4zM9 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8" clipRule="evenodd" opacity={.4} />
        <path d="M9 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

ToggleOffFillDuotone.displayName = 'ToggleOffFillDuotone';

// Triple export pattern (lucide-react style)
export { ToggleOffFillDuotone, ToggleOffFillDuotone as ToggleOffFillDuotoneIcon, ToggleOffFillDuotone as SiToggleOffFillDuotone };
export default ToggleOffFillDuotone;
export type { ToggleOffFillDuotoneProps };
