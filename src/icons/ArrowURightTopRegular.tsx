import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightTopRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopRegular = memo(
  forwardRef<SVGSVGElement, ArrowURightTopRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-top" {...props}>
      <path fill="currentColor" d="M15.47 3.47c.3-.3.77-.3 1.06 0l4 4 .1.11a.75.75 0 0 1-.1.95l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H10.5a4.75 4.75 0 0 0 0 9.5H15a.75.75 0 0 1 0 1.5h-4.5a6.25 6.25 0 0 1 0-12.5h7.69l-2.72-2.72a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowURightTopRegular.displayName = 'ArrowURightTopRegular';

// Triple export pattern (lucide-react style)
export { ArrowURightTopRegular, ArrowURightTopRegular as ArrowURightTopRegularIcon, ArrowURightTopRegular as SiArrowURightTopRegular };
export default ArrowURightTopRegular;
export type { ArrowURightTopRegularProps };
