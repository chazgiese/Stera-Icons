import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowsUpDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowsUpDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowsUpDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrows-up-down-fill-duotone" {...props}>
      <path d="M8 21a1 1 0 1 1-2 0V8h2zM17 3a1 1 0 0 1 1 1v13h-2V4a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" d="M21 17a1 1 0 0 1 .7 1.7l-4 4a1 1 0 0 1-1.33.08l-.08-.07-4-4A1 1 0 0 1 13 17zM7 2a1 1 0 0 1 .7.3l4 4A1 1 0 0 1 11 8H3a1 1 0 0 1-.7-1.7l4-4 .07-.07A1 1 0 0 1 7 2" />
    </IconBase>
  ))
);

ArrowsUpDownFillDuotone.displayName = 'ArrowsUpDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowsUpDownFillDuotone, ArrowsUpDownFillDuotone as ArrowsUpDownFillDuotoneIcon, ArrowsUpDownFillDuotone as SiArrowsUpDownFillDuotone };
export type { ArrowsUpDownFillDuotoneProps };
