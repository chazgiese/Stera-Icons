import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinusRegularDuotone = memo(
  forwardRef<SVGSVGElement, MinusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="minus-duotone" {...props}>
      <path d="M21 11.25a.75.75 0 0 1 0 1.5h-9v-1.5z" opacity={.4} />
        <path d="M12 12.75H3a.75.75 0 0 1 0-1.5h9z" />
    </IconBase>
  ))
);

MinusRegularDuotone.displayName = 'MinusRegularDuotone';

// Triple export pattern (lucide-react style)
export { MinusRegularDuotone, MinusRegularDuotone as MinusRegularDuotoneIcon, MinusRegularDuotone as SiMinusRegularDuotone };
export default MinusRegularDuotone;
export type { MinusRegularDuotoneProps };
