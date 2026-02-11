import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightTopRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightTopRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-top-duotone" {...props}>
      <path d="m18.94 8-.75.75H10.5a4.75 4.75 0 1 0 0 9.5H15a.75.75 0 0 1 0 1.5h-4.5a6.25 6.25 0 1 1 0-12.5h7.69z" opacity={.4} />
        <path d="M15.47 3.47c.3-.3.77-.3 1.06 0l4 4 .1.11a.75.75 0 0 1-.1.95l-4 4a.75.75 0 1 1-1.06-1.06L18.94 8l-3.47-3.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowURightTopRegularDuotone.displayName = 'ArrowURightTopRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowURightTopRegularDuotone, ArrowURightTopRegularDuotone as ArrowURightTopRegularDuotoneIcon, ArrowURightTopRegularDuotone as SiArrowURightTopRegularDuotone };
export default ArrowURightTopRegularDuotone;
export type { ArrowURightTopRegularDuotoneProps };
