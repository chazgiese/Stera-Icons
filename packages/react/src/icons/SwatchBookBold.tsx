import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SwatchBookBoldProps = Omit<IconBaseProps, 'children'>;

const SwatchBookBold = memo(
  forwardRef<SVGSVGElement, SwatchBookBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7 15.63a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.75" />
        <path fill="currentColor" fillRule="evenodd" d="M9 2a3 3 0 0 1 3 2.93 3 3 0 0 1 4.2.05l2.82 2.83a3 3 0 0 1 .05 4.2A3 3 0 0 1 22 15v4a3 3 0 0 1-3 3H7.15a5 5 0 0 1-1.2-.11H5.9a5 5 0 0 1-.66-.2l-.05-.02a5 5 0 0 1-2.69-2.46A5 5 0 0 1 2 17V5a3 3 0 0 1 3-3zM5 4a1 1 0 0 0-1 1v12a3 3 0 0 0 1.79 2.74l.07.03a3 3 0 0 0 1.07.23H7a3 3 0 0 0 .83-.12l.23-.07.13-.06a3 3 0 0 0 .47-.25l.03-.02.17-.13.1-.09a3 3 0 0 0 .78-1.04l.03-.07.09-.24.02-.08A3 3 0 0 0 10 17V5a1 1 0 0 0-1-1zm6.07 16H19a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.93zm3.7-13.6a1 1 0 0 0-1.4 0L12 7.75v8.48l5.6-5.6a1 1 0 0 0 0-1.42z" clipRule="evenodd" />
    </IconBase>
  ))
);

SwatchBookBold.displayName = 'SwatchBookBold';

// Triple export pattern (lucide-react style)
export { SwatchBookBold, SwatchBookBold as SwatchBookBoldIcon, SwatchBookBold as SiSwatchBookBold };
export type { SwatchBookBoldProps };
