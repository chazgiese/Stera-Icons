import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-right" {...props}>
      <path d="M15.47 3.47c.3-.3.77-.3 1.06 0l4 4 .1.11a.75.75 0 0 1-.1.95l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H8c-1.24 0-2.25 1-2.25 2.25v8a.75.75 0 0 1-1.5 0v-8A3.75 3.75 0 0 1 8 7.25h10.19l-2.72-2.72a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowCornerUpRightRegular.displayName = 'ArrowCornerUpRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpRightRegular, ArrowCornerUpRightRegular as ArrowCornerUpRightRegularIcon, ArrowCornerUpRightRegular as SiArrowCornerUpRightRegular };
export default ArrowCornerUpRightRegular;
export type { ArrowCornerUpRightRegularProps };
