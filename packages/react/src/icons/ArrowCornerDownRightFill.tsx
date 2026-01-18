import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerDownRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v8a4 4 0 0 0 4 4h9v4a1 1 0 0 0 1.7.7l5-5 .07-.07.1-.13v-.01a1 1 0 0 0-.16-1.2l-5-5A1 1 0 0 0 15 10v4H6a2 2 0 0 1-2-2V4a1 1 0 0 0-1-1" />
    </IconBase>
  ))
);

ArrowCornerDownRightFill.displayName = 'ArrowCornerDownRightFill';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightFill, ArrowCornerDownRightFill as ArrowCornerDownRightFillIcon, ArrowCornerDownRightFill as SiArrowCornerDownRightFill };
export type { ArrowCornerDownRightFillProps };
