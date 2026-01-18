import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SwatchBookFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SwatchBookFillDuotone = memo(
  forwardRef<SVGSVGElement, SwatchBookFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9.5 2A2.5 2.5 0 0 1 12 4.5V17a5 5 0 0 1-10 0V4.5A2.5 2.5 0 0 1 4.5 2zM7 15.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 4.93a3 3 0 0 1 4.2.05l2.82 2.83a3 3 0 0 1 .05 4.19A3 3 0 0 1 22 15v4a3 3 0 0 1-3 3H7.04A5 5 0 0 0 12 17v-.76l5.6-5.6a1 1 0 0 0 0-1.42L14.79 6.4a1 1 0 0 0-1.42 0L12 7.76zM11.07 20H19a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.93z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

SwatchBookFillDuotone.displayName = 'SwatchBookFillDuotone';

export { SwatchBookFillDuotone };
export type { SwatchBookFillDuotoneProps };
