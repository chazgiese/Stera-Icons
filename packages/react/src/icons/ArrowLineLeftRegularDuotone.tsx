import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLineLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13.47 4.47a.75.75 0 1 1 1.06 1.06l-5.72 5.72H21a.75.75 0 0 1 0 1.5H8.81l5.72 5.72a.75.75 0 1 1-1.06 1.06l-7-7a.8.8 0 0 1-.17-.81v-.01l.05-.08.12-.16z" />
        <path fill="currentColor" d="M3 3.25c.41 0 .75.34.75.75v16a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75" opacity={.4} />
    </IconBase>
  ))
);

ArrowLineLeftRegularDuotone.displayName = 'ArrowLineLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLineLeftRegularDuotone, ArrowLineLeftRegularDuotone as ArrowLineLeftRegularDuotoneIcon, ArrowLineLeftRegularDuotone as SiArrowLineLeftRegularDuotone };
export type { ArrowLineLeftRegularDuotoneProps };
