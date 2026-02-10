import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-left-fill" {...props}>
      <path fill="currentColor" d="M7.3 3.3A1 1 0 0 1 9 4v3h7a4 4 0 0 1 4 4v8a1 1 0 1 1-2 0v-8a2 2 0 0 0-2-2H9v3a1 1 0 0 1-1.7.7l-4-4a1 1 0 0 1-.07-1.33l.06-.08z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftFill.displayName = 'ArrowCornerUpLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeftFill, ArrowCornerUpLeftFill as ArrowCornerUpLeftFillIcon, ArrowCornerUpLeftFill as SiArrowCornerUpLeftFill };
export default ArrowCornerUpLeftFill;
export type { ArrowCornerUpLeftFillProps };
