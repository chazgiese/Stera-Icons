import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorOgFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorOgFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorOgFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-og-fill-duotone" {...props}>
      <path fill="currentColor" d="m17.45 12.99-3 .4a1 1 0 0 0-.77 1.4l2.06 4.56-1.83.82-2.06-4.55a1 1 0 0 0-1.47-.42l-.1.08L8 17.26V4.66z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M6.59 1.54a1 1 0 0 1 1.07.16l12.76 11.24a1 1 0 0 1-.53 1.74l-3.84.52 1.92 4.24a1 1 0 0 1-.5 1.32l-3.64 1.65a1 1 0 0 1-1.33-.5l-1.91-4.24-2.93 2.54A1 1 0 0 1 6 19.46V2.45a1 1 0 0 1 .59-.91M8 17.26l2.29-1.98.09-.08a1 1 0 0 1 1.47.42l2.06 4.56 1.83-.83-2.06-4.55a1 1 0 0 1 .78-1.4l3-.41L8 4.66z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorOgFillDuotone.displayName = 'CursorOgFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorOgFillDuotone, CursorOgFillDuotone as CursorOgFillDuotoneIcon, CursorOgFillDuotone as SiCursorOgFillDuotone };
export default CursorOgFillDuotone;
export type { CursorOgFillDuotoneProps };
