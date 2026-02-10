import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-left-fill" {...props}>
      <path fill="currentColor" d="M19 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H9v3a1 1 0 0 1-1.7.7l-4-4-.07-.07-.1-.13v-.01a1 1 0 0 1 .16-1.2l4-4A1 1 0 0 1 9 12v3h7a2 2 0 0 0 2-2V5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowCornerDownLeftFill.displayName = 'ArrowCornerDownLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownLeftFill, ArrowCornerDownLeftFill as ArrowCornerDownLeftFillIcon, ArrowCornerDownLeftFill as SiArrowCornerDownLeftFill };
export default ArrowCornerDownLeftFill;
export type { ArrowCornerDownLeftFillProps };
