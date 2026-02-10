import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideAltFillProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltFill = memo(
  forwardRef<SVGSVGElement, CircleDivideAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-alt-fill" {...props}>
      <path fill="currentColor" d="M21.95 13a10 10 0 0 1-19.9 0zM12 2a10 10 0 0 1 9.95 9H2.05A10 10 0 0 1 12 2" />
    </IconBase>
  ))
);

CircleDivideAltFill.displayName = 'CircleDivideAltFill';

// Triple export pattern (lucide-react style)
export { CircleDivideAltFill, CircleDivideAltFill as CircleDivideAltFillIcon, CircleDivideAltFill as SiCircleDivideAltFill };
export default CircleDivideAltFill;
export type { CircleDivideAltFillProps };
