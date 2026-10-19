import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideHBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDivideHBold = memo(
  forwardRef<SVGSVGElement, CircleDivideHBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M22.5 12c0 5.8-4.7 10.5-10.5 10.5S1.5 17.8 1.5 12 6.2 1.5 12 1.5 22.5 6.2 22.5 12m-2.06-1c-.5-4.22-4.08-7.5-8.44-7.5S4.06 6.78 3.56 11zM3.56 13c.5 4.22 4.08 7.5 8.44 7.5s7.95-3.28 8.44-7.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideHBold.displayName = 'CircleDivideHBold';

// Triple export pattern
export { CircleDivideHBold, CircleDivideHBold as CircleDivideHBoldIcon, CircleDivideHBold as SiCircleDivideHBold };
export default CircleDivideHBold;
export type { CircleDivideHBoldProps };
