import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLineUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-up-duotone" {...props}>
      <path fill="currentColor" d="M20 2.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M12 6.25h.08l.05.01h.02l.04.02.1.03a1 1 0 0 1 .24.16l7 7a.75.75 0 1 1-1.06 1.06l-5.72-5.72V21a.75.75 0 0 1-1.5 0V8.81l-5.72 5.72a.75.75 0 0 1-1.06-1.06l7-7q.07-.08.16-.12l.08-.04.1-.03.04-.02h.02z" />
    </IconBase>
  ))
);

ArrowLineUpRegularDuotone.displayName = 'ArrowLineUpRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLineUpRegularDuotone, ArrowLineUpRegularDuotone as ArrowLineUpRegularDuotoneIcon, ArrowLineUpRegularDuotone as SiArrowLineUpRegularDuotone };
export default ArrowLineUpRegularDuotone;
export type { ArrowLineUpRegularDuotoneProps };
