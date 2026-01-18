import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorOgBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorOgBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorOgBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13.68 14.81a1 1 0 0 0 1.04.56l1.33-.17 1.92 4.24a1 1 0 0 1-.5 1.32l-3.64 1.65a1 1 0 0 1-1.33-.5l-1.91-4.24 1.01-.88a1 1 0 0 0 .26-1.16l2.05 4.54 1.83-.82z" opacity={.4} />
        <path fill="currentColor" d="M6.59 1.54a1 1 0 0 1 1.07.16l12.76 11.24a1 1 0 0 1-.53 1.74l-5.17.7a1 1 0 1 1-.26-1.99l3-.4L8 4.66v12.6l2.29-1.98a1 1 0 1 1 1.31 1.5l-3.94 3.43A1 1 0 0 1 6 19.46V2.45a1 1 0 0 1 .59-.91" />
    </IconBase>
  ))
);

CursorOgBoldDuotone.displayName = 'CursorOgBoldDuotone';

// Triple export pattern (lucide-react style)
export { CursorOgBoldDuotone, CursorOgBoldDuotone as CursorOgBoldDuotoneIcon, CursorOgBoldDuotone as SiCursorOgBoldDuotone };
export type { CursorOgBoldDuotoneProps };
