import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowULeftTopRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopRegular = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-top" {...props}>
      <path fill="currentColor" d="M5.47 2.47a.75.75 0 1 1 1.06 1.06L3.81 6.25H15.5a7.25 7.25 0 1 1 0 14.5H8a.75.75 0 0 1 0-1.5h7.5a5.75 5.75 0 0 0 0-11.5H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4-.12-.16a.7.7 0 0 1-.1-.47l.01-.03.01-.04.03-.1.02-.04.06-.1v-.01l.09-.11z" />
    </IconBase>
  ))
);

ArrowULeftTopRegular.displayName = 'ArrowULeftTopRegular';

// Triple export pattern (lucide-react style)
export { ArrowULeftTopRegular, ArrowULeftTopRegular as ArrowULeftTopRegularIcon, ArrowULeftTopRegular as SiArrowULeftTopRegular };
export type { ArrowULeftTopRegularProps };
