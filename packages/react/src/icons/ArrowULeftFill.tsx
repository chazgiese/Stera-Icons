import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowULeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftFill = memo(
  forwardRef<SVGSVGElement, ArrowULeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.5 3a7.5 7.5 0 0 1 0 15H7v3a1 1 0 0 1-1.7.7l-4-4-.07-.07-.1-.13v-.01a1 1 0 0 1 .16-1.2l4-4A1 1 0 0 1 7 13v3h8.5a5.5 5.5 0 1 0 0-11H8a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ArrowULeftFill.displayName = 'ArrowULeftFill';

// Triple export pattern (lucide-react style)
export { ArrowULeftFill, ArrowULeftFill as ArrowULeftFillIcon, ArrowULeftFill as SiArrowULeftFill };
export type { ArrowULeftFillProps };
