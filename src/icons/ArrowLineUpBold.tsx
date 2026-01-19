import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLineUpBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowLineUpBold = memo(
  forwardRef<SVGSVGElement, ArrowLineUpBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-line-up-bold" {...props}>
      <path fill="currentColor" d="M3 3a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1M4.3 13.3a1 1 0 1 0 1.4 1.4L11 9.42V21a1 1 0 1 0 2 0V9.41l5.3 5.3a1 1 0 1 0 1.4-1.42l-7-7a1 1 0 0 0-1.4 0z" />
    </IconBase>
  ))
);

ArrowLineUpBold.displayName = 'ArrowLineUpBold';

// Triple export pattern (lucide-react style)
export { ArrowLineUpBold, ArrowLineUpBold as ArrowLineUpBoldIcon, ArrowLineUpBold as SiArrowLineUpBold };
export type { ArrowLineUpBoldProps };
