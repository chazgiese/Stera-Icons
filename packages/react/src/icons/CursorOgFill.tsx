import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorOgFillProps = Omit<IconBaseProps, 'children'>;

const CursorOgFill = memo(
  forwardRef<SVGSVGElement, CursorOgFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6.59 1.54a1 1 0 0 1 1.07.16l12.76 11.24a1 1 0 0 1-.53 1.74l-3.84.52 1.92 4.24a1 1 0 0 1-.5 1.32l-3.64 1.65a1 1 0 0 1-1.33-.5l-1.91-4.24-2.93 2.54A1 1 0 0 1 6 19.46V2.45a1 1 0 0 1 .59-.91" />
    </IconBase>
  ))
);

CursorOgFill.displayName = 'CursorOgFill';

// Triple export pattern (lucide-react style)
export { CursorOgFill, CursorOgFill as CursorOgFillIcon, CursorOgFill as SiCursorOgFill };
export type { CursorOgFillProps };
