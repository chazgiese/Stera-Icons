import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-right-duotone" {...props}>
      <path d="M5 4.25c.41 0 .75.34.75.75v8c0 1.24 1 2.25 2.25 2.25h10.19l.75.75-.75.75H8A3.75 3.75 0 0 1 4.25 13V5c0-.41.34-.75.75-.75" opacity={.4} />
        <path d="M15.47 11.47c.3-.3.77-.3 1.06 0l4 4a.75.75 0 0 1 .1.95l-.1.11-4 4a.75.75 0 1 1-1.06-1.06L18.94 16l-3.47-3.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowCornerDownRightRegularDuotone.displayName = 'ArrowCornerDownRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightRegularDuotone, ArrowCornerDownRightRegularDuotone as ArrowCornerDownRightRegularDuotoneIcon, ArrowCornerDownRightRegularDuotone as SiArrowCornerDownRightRegularDuotone };
export default ArrowCornerDownRightRegularDuotone;
export type { ArrowCornerDownRightRegularDuotoneProps };
