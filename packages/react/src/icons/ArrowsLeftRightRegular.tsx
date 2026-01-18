import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowsLeftRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowsLeftRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowsLeftRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5.97 12.97a.75.75 0 1 1 1.06 1.06l-2.72 2.72H20.5a.75.75 0 1 1 0 1.5H4.31l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1-.05-1l.05-.06zM16.97 2.97c.3-.3.77-.3 1.06 0l4 4 .1.11a.75.75 0 0 1-.1.95l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H3.5a.75.75 0 0 1 0-1.5h16.19l-2.72-2.72a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowsLeftRightRegular.displayName = 'ArrowsLeftRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowsLeftRightRegular, ArrowsLeftRightRegular as ArrowsLeftRightRegularIcon, ArrowsLeftRightRegular as SiArrowsLeftRightRegular };
export type { ArrowsLeftRightRegularProps };
