import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowURightTopRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopRegular = memo(
  forwardRef<SVGSVGElement, ArrowURightTopRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.53 2.47a.75.75 0 1 0-1.06 1.06l2.72 2.72H8.5a7.25 7.25 0 0 0 0 14.5H16a.75.75 0 0 0 0-1.5H8.5a5.75 5.75 0 0 1 0-11.5h11.69l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4 .12-.16a.7.7 0 0 0 .1-.47l-.01-.03-.01-.04-.03-.1-.02-.04-.06-.1v-.01l-.09-.11z" />
    </IconBase>
  ))
);

ArrowURightTopRegular.displayName = 'ArrowURightTopRegular';

// Triple export pattern (lucide-react style)
export { ArrowURightTopRegular, ArrowURightTopRegular as ArrowURightTopRegularIcon, ArrowURightTopRegular as SiArrowURightTopRegular };
export type { ArrowURightTopRegularProps };
