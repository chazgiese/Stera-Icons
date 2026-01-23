import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightTopRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightTopRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-top-duotone" {...props}>
      <path fill="currentColor" d="m20.94 7-.75.75H8.5a5.75 5.75 0 0 0 0 11.5H16a.75.75 0 0 1 0 1.5H8.5a7.25 7.25 0 1 1 0-14.5h11.69z" opacity={.4} />
        <path fill="currentColor" d="M17.47 2.47c.3-.3.77-.3 1.06 0l4 4 .1.11a.75.75 0 0 1-.1.95l-4 4a.75.75 0 1 1-1.06-1.06L20.94 7l-3.47-3.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowURightTopRegularDuotone.displayName = 'ArrowURightTopRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowURightTopRegularDuotone, ArrowURightTopRegularDuotone as ArrowURightTopRegularDuotoneIcon, ArrowURightTopRegularDuotone as SiArrowURightTopRegularDuotone };
export default ArrowURightTopRegularDuotone;
export type { ArrowURightTopRegularDuotoneProps };
