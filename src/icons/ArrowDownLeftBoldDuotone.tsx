import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-down-left-bold-duotone" {...props}>
      <path d="M17.3 5.3a1 1 0 1 1 1.4 1.4L8.42 17H7v-1.41z" opacity={.4} />
        <path d="M6 7a1 1 0 0 1 1 1v9h9a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowDownLeftBoldDuotone.displayName = 'ArrowDownLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowDownLeftBoldDuotone, ArrowDownLeftBoldDuotone as ArrowDownLeftBoldDuotoneIcon, ArrowDownLeftBoldDuotone as SiArrowDownLeftBoldDuotone };
export default ArrowDownLeftBoldDuotone;
export type { ArrowDownLeftBoldDuotoneProps };
