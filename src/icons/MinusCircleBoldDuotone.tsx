import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinusCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, MinusCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="minus-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

MinusCircleBoldDuotone.displayName = 'MinusCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { MinusCircleBoldDuotone, MinusCircleBoldDuotone as MinusCircleBoldDuotoneIcon, MinusCircleBoldDuotone as SiMinusCircleBoldDuotone };
export default MinusCircleBoldDuotone;
export type { MinusCircleBoldDuotoneProps };
