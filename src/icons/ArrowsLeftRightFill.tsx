import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsLeftRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowsLeftRightFill = memo(
  forwardRef<SVGSVGElement, ArrowsLeftRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrows-left-right-fill" {...props}>
      <path fill="currentColor" d="M5.8 12.8a1 1 0 0 1 1.7.7v3h13a1 1 0 1 1 0 2h-13v3a1 1 0 0 1-1.7.7l-4-4a1 1 0 0 1-.29-.54v-.14l-.01-.02v-.02a1 1 0 0 1 .11-.44l.02-.04.16-.2zM17.12 2.58a1 1 0 0 1 1.09.21l4 4 .16.21v.01a1 1 0 0 1-.01 1l-.15.2-4 4a1 1 0 0 1-1.71-.71v-3h-13a1 1 0 0 1 0-2h13v-3a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

ArrowsLeftRightFill.displayName = 'ArrowsLeftRightFill';

// Triple export pattern (lucide-react style)
export { ArrowsLeftRightFill, ArrowsLeftRightFill as ArrowsLeftRightFillIcon, ArrowsLeftRightFill as SiArrowsLeftRightFill };
export default ArrowsLeftRightFill;
export type { ArrowsLeftRightFillProps };
