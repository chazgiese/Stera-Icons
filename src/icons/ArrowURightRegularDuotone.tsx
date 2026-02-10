import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-duotone" {...props}>
      <path fill="currentColor" d="M15 4.25a.75.75 0 0 1 0 1.5h-4.5a4.75 4.75 0 0 0 0 9.5h7.69l.75.75-.75.75H10.5a6.25 6.25 0 1 1 0-12.5z" opacity={.4} />
        <path fill="currentColor" d="M15.47 11.47c.3-.3.77-.3 1.06 0l4 4a.75.75 0 0 1 .1.95l-.1.11-4 4a.75.75 0 1 1-1.06-1.06L18.94 16l-3.47-3.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowURightRegularDuotone.displayName = 'ArrowURightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowURightRegularDuotone, ArrowURightRegularDuotone as ArrowURightRegularDuotoneIcon, ArrowURightRegularDuotone as SiArrowURightRegularDuotone };
export default ArrowURightRegularDuotone;
export type { ArrowURightRegularDuotoneProps };
