import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideHBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideHBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideHBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M22.5 12q0 .5-.05 1H1.55q-.05-.5-.05-1C1.5 6.2 6.2 1.5 12 1.5S22.5 6.2 22.5 12m-2.06-1c-.5-4.22-4.08-7.5-8.44-7.5S4.06 6.78 3.56 11z" clipRule="evenodd" />
        <path d="M22.45 13c-.5 5.33-4.99 9.5-10.45 9.5S2.05 18.33 1.55 13h2.01c.5 4.22 4.08 7.5 8.44 7.5s7.95-3.28 8.44-7.5z" opacity={.4} />
    </IconBase>
  ))
);

CircleDivideHBoldDuotone.displayName = 'CircleDivideHBoldDuotone';

// Triple export pattern
export { CircleDivideHBoldDuotone, CircleDivideHBoldDuotone as CircleDivideHBoldDuotoneIcon, CircleDivideHBoldDuotone as SiCircleDivideHBoldDuotone };
export default CircleDivideHBoldDuotone;
export type { CircleDivideHBoldDuotoneProps };
