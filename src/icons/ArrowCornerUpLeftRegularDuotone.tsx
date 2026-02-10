import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-left-duotone" {...props}>
      <path fill="currentColor" d="M16 7.25A3.75 3.75 0 0 1 19.75 11v8a.75.75 0 0 1-1.5 0v-8c0-1.24-1-2.25-2.25-2.25H5.81L5.06 8l.75-.75z" opacity={.4} />
        <path fill="currentColor" d="M7.47 3.47a.75.75 0 1 1 1.06 1.06L5.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1-.1-.95l.1-.11z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftRegularDuotone.displayName = 'ArrowCornerUpLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeftRegularDuotone, ArrowCornerUpLeftRegularDuotone as ArrowCornerUpLeftRegularDuotoneIcon, ArrowCornerUpLeftRegularDuotone as SiArrowCornerUpLeftRegularDuotone };
export default ArrowCornerUpLeftRegularDuotone;
export type { ArrowCornerUpLeftRegularDuotoneProps };
