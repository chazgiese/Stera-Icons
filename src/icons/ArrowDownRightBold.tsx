import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowDownRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowDownRightBold = memo(
  forwardRef<SVGSVGElement, ArrowDownRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down-right-bold" {...props}>
      <path fill="currentColor" d="M5.3 5.3a1 1 0 0 1 1.4 0L17 15.58V8a1 1 0 1 1 2 0v10a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h7.59L5.29 6.7a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowDownRightBold.displayName = 'ArrowDownRightBold';

// Triple export pattern (lucide-react style)
export { ArrowDownRightBold, ArrowDownRightBold as ArrowDownRightBoldIcon, ArrowDownRightBold as SiArrowDownRightBold };
export type { ArrowDownRightBoldProps };
