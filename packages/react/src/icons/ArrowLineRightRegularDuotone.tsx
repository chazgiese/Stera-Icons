import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLineRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLineRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLineRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 3.25c.41 0 .75.34.75.75v16a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M9.47 4.47c.3-.3.77-.3 1.06 0l7 7q.07.07.12.16l.04.08a.8.8 0 0 1-.08.72l-.08.1-7 7a.75.75 0 1 1-1.06-1.06l5.72-5.72H3a.75.75 0 0 1 0-1.5h12.19L9.47 5.53a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowLineRightRegularDuotone.displayName = 'ArrowLineRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLineRightRegularDuotone, ArrowLineRightRegularDuotone as ArrowLineRightRegularDuotoneIcon, ArrowLineRightRegularDuotone as SiArrowLineRightRegularDuotone };
export type { ArrowLineRightRegularDuotoneProps };
