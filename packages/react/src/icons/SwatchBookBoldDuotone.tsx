import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SwatchBookBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SwatchBookBoldDuotone = memo(
  forwardRef<SVGSVGElement, SwatchBookBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4.93a3 3 0 0 1 4.2.05l2.82 2.83a3 3 0 0 1 .05 4.2A3 3 0 0 1 22 15v4a3 3 0 0 1-3 3H7A5 5 0 0 0 12 17v-.76l5.6-5.6a1 1 0 0 0 0-1.42L14.79 6.4a1 1 0 0 0-1.42 0L12 7.76V4.93M11.07 20H19a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.93z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7 15.63a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.75" />
        <path fill="currentColor" fillRule="evenodd" d="M9 2a3 3 0 0 1 3 3v12a5 5 0 0 1-10 0V5a3 3 0 0 1 3-3zM5 4a1 1 0 0 0-1 1v12a3 3 0 1 0 6 0V5a1 1 0 0 0-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

SwatchBookBoldDuotone.displayName = 'SwatchBookBoldDuotone';

export { SwatchBookBoldDuotone };
export type { SwatchBookBoldDuotoneProps };
