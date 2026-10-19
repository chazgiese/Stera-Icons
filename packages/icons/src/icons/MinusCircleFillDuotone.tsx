import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinusCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, MinusCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m-4 9.37c-.48 0-.87.4-.87.88s.39.87.87.87h8c.48 0 .88-.4.88-.87 0-.49-.4-.88-.88-.88z" clipRule="evenodd" opacity={.4} />
        <path d="M16 11.12c.48 0 .88.4.88.88s-.4.87-.88.87H8c-.48 0-.87-.4-.87-.87 0-.49.39-.88.87-.88z" />
    </IconBase>
  ))
);

MinusCircleFillDuotone.displayName = 'MinusCircleFillDuotone';

// Triple export pattern
export { MinusCircleFillDuotone, MinusCircleFillDuotone as MinusCircleFillDuotoneIcon, MinusCircleFillDuotone as SiMinusCircleFillDuotone };
export default MinusCircleFillDuotone;
export type { MinusCircleFillDuotoneProps };
