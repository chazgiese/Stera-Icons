import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLeftRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRightBold = memo(
  forwardRef<SVGSVGElement, ArrowLeftRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-left-right-bold" {...props}>
      <path fill="currentColor" d="M16.8 6.8a1 1 0 0 1 1.4 0l4.5 4.5a1 1 0 0 1 .07 1.33l-.06.08-4.5 4.5a1 1 0 0 1-1.42-1.42L19.6 13H4.4l2.8 2.8a1 1 0 0 1-1.42 1.4l-4.5-4.5-.07-.07a1 1 0 0 1 .07-1.34l4.5-4.5a1 1 0 0 1 1.42 1.42L4.4 11H19.6l-2.8-2.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowLeftRightBold.displayName = 'ArrowLeftRightBold';

// Triple export pattern (lucide-react style)
export { ArrowLeftRightBold, ArrowLeftRightBold as ArrowLeftRightBoldIcon, ArrowLeftRightBold as SiArrowLeftRightBold };
export type { ArrowLeftRightBoldProps };
