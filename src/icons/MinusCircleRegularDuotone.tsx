import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinusCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, MinusCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="minus-circle-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M16 11.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

MinusCircleRegularDuotone.displayName = 'MinusCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { MinusCircleRegularDuotone, MinusCircleRegularDuotone as MinusCircleRegularDuotoneIcon, MinusCircleRegularDuotone as SiMinusCircleRegularDuotone };
export default MinusCircleRegularDuotone;
export type { MinusCircleRegularDuotoneProps };
