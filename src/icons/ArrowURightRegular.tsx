import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowURightRegular = memo(
  forwardRef<SVGSVGElement, ArrowURightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right" {...props}>
      <path fill="currentColor" d="M15 4.25a.75.75 0 0 1 0 1.5h-4.5a4.75 4.75 0 0 0 0 9.5h7.69l-2.72-2.72a.75.75 0 1 1 1.06-1.06l4 4a.75.75 0 0 1 .1.95l-.1.11-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H10.5a6.25 6.25 0 1 1 0-12.5z" />
    </IconBase>
  ))
);

ArrowURightRegular.displayName = 'ArrowURightRegular';

// Triple export pattern (lucide-react style)
export { ArrowURightRegular, ArrowURightRegular as ArrowURightRegularIcon, ArrowURightRegular as SiArrowURightRegular };
export default ArrowURightRegular;
export type { ArrowURightRegularProps };
