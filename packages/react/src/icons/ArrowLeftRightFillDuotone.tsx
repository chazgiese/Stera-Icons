import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLeftRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLeftRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16.75 13h-9.5v-2h9.5z" opacity={.4} />
        <path fill="currentColor" d="M5.97 6.97a.75.75 0 0 1 1.28.53v9a.75.75 0 0 1-1.28.53l-4.5-4.5-.05-.06a.75.75 0 0 1 .05-1zM17.21 6.8c.28-.11.6-.04.82.17l4.5 4.5a.75.75 0 0 1 .1.95l-.1.11-4.5 4.5a.75.75 0 0 1-1.28-.53v-9c0-.3.18-.58.46-.7" />
    </IconBase>
  ))
);

ArrowLeftRightFillDuotone.displayName = 'ArrowLeftRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLeftRightFillDuotone, ArrowLeftRightFillDuotone as ArrowLeftRightFillDuotoneIcon, ArrowLeftRightFillDuotone as SiArrowLeftRightFillDuotone };
export type { ArrowLeftRightFillDuotoneProps };
