import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-left" {...props}>
      <path d="M7.47 3.47a.75.75 0 1 1 1.06 1.06L5.81 7.25H16A3.75 3.75 0 0 1 19.75 11v8a.75.75 0 0 1-1.5 0v-8c0-1.24-1-2.25-2.25-2.25H5.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1-.1-.95l.1-.11z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftRegular.displayName = 'ArrowCornerUpLeftRegular';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeftRegular, ArrowCornerUpLeftRegular as ArrowCornerUpLeftRegularIcon, ArrowCornerUpLeftRegular as SiArrowCornerUpLeftRegular };
export default ArrowCornerUpLeftRegular;
export type { ArrowCornerUpLeftRegularProps };
