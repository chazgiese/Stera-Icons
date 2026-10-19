import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideHRegularProps = Omit<IconBaseProps, 'children'>;

const CircleDivideHRegular = memo(
  forwardRef<SVGSVGElement, CircleDivideHRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M22.25 12c0 5.66-4.59 10.25-10.25 10.25S1.75 17.66 1.75 12 6.34 1.75 12 1.75 22.25 6.34 22.25 12m-1.53-.75c-.38-4.48-4.14-8-8.72-8s-8.34 3.52-8.72 8zm-17.44 1.5c.38 4.48 4.14 8 8.72 8s8.34-3.52 8.72-8z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideHRegular.displayName = 'CircleDivideHRegular';

// Triple export pattern
export { CircleDivideHRegular, CircleDivideHRegular as CircleDivideHRegularIcon, CircleDivideHRegular as SiCircleDivideHRegular };
export default CircleDivideHRegular;
export type { CircleDivideHRegularProps };
