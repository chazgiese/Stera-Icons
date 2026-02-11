import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-right-duotone" {...props}>
      <path d="m18.94 8-.75.75H8c-1.24 0-2.25 1-2.25 2.25v8a.75.75 0 0 1-1.5 0v-8A3.75 3.75 0 0 1 8 7.25h10.19z" opacity={.4} />
        <path d="M15.47 3.47c.3-.3.77-.3 1.06 0l4 4 .1.11a.75.75 0 0 1-.1.95l-4 4a.75.75 0 1 1-1.06-1.06L18.94 8l-3.47-3.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowCornerUpRightRegularDuotone.displayName = 'ArrowCornerUpRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpRightRegularDuotone, ArrowCornerUpRightRegularDuotone as ArrowCornerUpRightRegularDuotoneIcon, ArrowCornerUpRightRegularDuotone as SiArrowCornerUpRightRegularDuotone };
export default ArrowCornerUpRightRegularDuotone;
export type { ArrowCornerUpRightRegularDuotoneProps };
