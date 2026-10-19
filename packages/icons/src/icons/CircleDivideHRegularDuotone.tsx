import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideHRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideHRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideHRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="m22.25 12-.03.75H1.78L1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12m-1.53-.75c-.38-4.48-4.14-8-8.72-8s-8.34 3.52-8.72 8z" clipRule="evenodd" />
        <path d="M22.22 12.75c-.38 5.31-4.81 9.5-10.22 9.5-5.4 0-9.83-4.19-10.22-9.5h1.5c.38 4.48 4.14 8 8.72 8s8.34-3.52 8.72-8z" opacity={.4} />
    </IconBase>
  ))
);

CircleDivideHRegularDuotone.displayName = 'CircleDivideHRegularDuotone';

// Triple export pattern
export { CircleDivideHRegularDuotone, CircleDivideHRegularDuotone as CircleDivideHRegularDuotoneIcon, CircleDivideHRegularDuotone as SiCircleDivideHRegularDuotone };
export default CircleDivideHRegularDuotone;
export type { CircleDivideHRegularDuotoneProps };
