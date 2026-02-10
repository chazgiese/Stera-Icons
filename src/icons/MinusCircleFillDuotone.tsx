import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinusCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, MinusCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="minus-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-4 9a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

MinusCircleFillDuotone.displayName = 'MinusCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { MinusCircleFillDuotone, MinusCircleFillDuotone as MinusCircleFillDuotoneIcon, MinusCircleFillDuotone as SiMinusCircleFillDuotone };
export default MinusCircleFillDuotone;
export type { MinusCircleFillDuotoneProps };
