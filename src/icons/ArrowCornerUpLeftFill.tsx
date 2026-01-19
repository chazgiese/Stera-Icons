import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerUpLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-left-fill" {...props}>
      <path fill="currentColor" d="M21 21a1 1 0 0 0 1-1v-8a4 4 0 0 0-4-4H9V4a1 1 0 0 0-1.7-.7l-5 5-.07.07-.1.13v.01a1 1 0 0 0 .16 1.2l5 5A1 1 0 0 0 9 14v-4h9a2 2 0 0 1 2 2v8a1 1 0 0 0 1 1" />
    </IconBase>
  ))
);

ArrowCornerUpLeftFill.displayName = 'ArrowCornerUpLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeftFill, ArrowCornerUpLeftFill as ArrowCornerUpLeftFillIcon, ArrowCornerUpLeftFill as SiArrowCornerUpLeftFill };
export default ArrowCornerUpLeftFill;
export type { ArrowCornerUpLeftFillProps };
