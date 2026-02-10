import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsUpDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowsUpDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowsUpDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrows-up-down-duotone" {...props}>
      <path d="M7.75 4.81V21a.75.75 0 0 1-1.5 0V4.81L7 4.06zM17 3.25c.41 0 .75.34.75.75v16.19l-.75.75-.75-.75V4c0-.41.34-.75.75-.75" opacity={0.4} />
        <path fill="currentColor" d="M20.47 17.47a.75.75 0 0 1 1.06 1.06l-4 4c-.3.3-.77.3-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L17 20.94zM7 2.25q.31 0 .53.22l4 4a.75.75 0 1 1-1.06 1.06L7 4.06 3.53 7.53a.75.75 0 1 1-1.06-1.06l4-4 .11-.1A1 1 0 0 1 7 2.26" />
    </IconBase>
  ))
);

ArrowsUpDownRegularDuotone.displayName = 'ArrowsUpDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowsUpDownRegularDuotone, ArrowsUpDownRegularDuotone as ArrowsUpDownRegularDuotoneIcon, ArrowsUpDownRegularDuotone as SiArrowsUpDownRegularDuotone };
export default ArrowsUpDownRegularDuotone;
export type { ArrowsUpDownRegularDuotoneProps };
