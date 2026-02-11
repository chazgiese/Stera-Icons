import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideFillProps = Omit<IconBaseProps, 'children'>;

const CircleDivideFill = memo(
  forwardRef<SVGSVGElement, CircleDivideFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-fill" {...props}>
      <path d="M11 21.95a10 10 0 0 1 0-19.9zM13 2.05a10 10 0 0 1 0 19.9z" />
    </IconBase>
  ))
);

CircleDivideFill.displayName = 'CircleDivideFill';

// Triple export pattern (lucide-react style)
export { CircleDivideFill, CircleDivideFill as CircleDivideFillIcon, CircleDivideFill as SiCircleDivideFill };
export default CircleDivideFill;
export type { CircleDivideFillProps };
