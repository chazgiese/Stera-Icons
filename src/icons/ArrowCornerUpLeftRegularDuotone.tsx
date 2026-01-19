import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerUpLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-left-duotone" {...props}>
      <path fill="currentColor" d="M21 20.75c.41 0 .75-.34.75-.75v-8A3.75 3.75 0 0 0 18 8.25H4.81L4.06 9l.75.75H18c1.24 0 2.25 1 2.25 2.25v8c0 .41.34.75.75.75" opacity={.4} />
        <path fill="currentColor" d="M7.47 14.53a.75.75 0 1 0 1.06-1.06L4.06 9l4.47-4.47a.75.75 0 1 0-1.06-1.06l-5 5-.1.11a.75.75 0 0 0 .1.95z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftRegularDuotone.displayName = 'ArrowCornerUpLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeftRegularDuotone, ArrowCornerUpLeftRegularDuotone as ArrowCornerUpLeftRegularDuotoneIcon, ArrowCornerUpLeftRegularDuotone as SiArrowCornerUpLeftRegularDuotone };
export default ArrowCornerUpLeftRegularDuotone;
export type { ArrowCornerUpLeftRegularDuotoneProps };
