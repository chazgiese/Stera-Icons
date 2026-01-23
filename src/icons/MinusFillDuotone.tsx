import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinusFillDuotone = memo(
  forwardRef<SVGSVGElement, MinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="minus-fill-duotone" {...props}>
      <path fill="currentColor" d="M21 10.5a1.5 1.5 0 0 1 0 3h-9v-3z" opacity={.4} />
        <path fill="currentColor" d="M12 13.5H3a1.5 1.5 0 0 1 0-3h9z" />
    </IconBase>
  ))
);

MinusFillDuotone.displayName = 'MinusFillDuotone';

// Triple export pattern (lucide-react style)
export { MinusFillDuotone, MinusFillDuotone as MinusFillDuotoneIcon, MinusFillDuotone as SiMinusFillDuotone };
export default MinusFillDuotone;
export type { MinusFillDuotoneProps };
