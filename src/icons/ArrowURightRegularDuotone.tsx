import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowURightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-duotone" {...props}>
      <path fill="currentColor" d="M16 3.25a.75.75 0 0 1 0 1.5H8.5a5.75 5.75 0 1 0 0 11.5h11.69l.75.75-.75.75H8.5a7.25 7.25 0 1 1 0-14.5z" opacity={.4} />
        <path fill="currentColor" d="M17.47 12.47c.3-.3.77-.3 1.06 0l4 4a.75.75 0 0 1 .1.95l-.1.11-4 4a.75.75 0 1 1-1.06-1.06L20.94 17l-3.47-3.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowURightRegularDuotone.displayName = 'ArrowURightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowURightRegularDuotone, ArrowURightRegularDuotone as ArrowURightRegularDuotoneIcon, ArrowURightRegularDuotone as SiArrowURightRegularDuotone };
export default ArrowURightRegularDuotone;
export type { ArrowURightRegularDuotoneProps };
