import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-right-bold" {...props}>
      <path d="M15.3 3.3a1 1 0 0 1 1.4 0l4 4 .07.07a1 1 0 0 1-.06 1.34l-4 4a1 1 0 1 1-1.42-1.42L17.6 9H8a2 2 0 0 0-2 2v8a1 1 0 0 1-2 0v-8a4 4 0 0 1 4-4h9.59l-2.3-2.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowCornerUpRightBold.displayName = 'ArrowCornerUpRightBold';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpRightBold, ArrowCornerUpRightBold as ArrowCornerUpRightBoldIcon, ArrowCornerUpRightBold as SiArrowCornerUpRightBold };
export default ArrowCornerUpRightBold;
export type { ArrowCornerUpRightBoldProps };
