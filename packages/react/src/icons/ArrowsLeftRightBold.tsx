import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowsLeftRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowsLeftRightBold = memo(
  forwardRef<SVGSVGElement, ArrowsLeftRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5.8 12.8a1 1 0 0 1 1.4 1.4l-2.29 2.3H20.5a1 1 0 0 1 0 2H4.91l2.3 2.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1-.07-1.33l.07-.08zM16.8 2.8a1 1 0 0 1 1.4 0l4 4 .07.07a1 1 0 0 1-.06 1.34l-4 4a1 1 0 0 1-1.42-1.42l2.3-2.29H3.5a1 1 0 0 1 0-2h15.59l-2.3-2.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowsLeftRightBold.displayName = 'ArrowsLeftRightBold';

export { ArrowsLeftRightBold };
export type { ArrowsLeftRightBoldProps };
