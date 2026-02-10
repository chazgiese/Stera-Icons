import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorOgFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorOgFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorOgFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-og-fill-duotone" {...props}>
      <path fill="currentColor" d="m16.7 12.92-2.7.37a1 1 0 0 0-.78 1.4l1.92 4.25-1.6.73-1.92-4.25a1 1 0 0 0-1.48-.41l-.09.07L8 16.87V5.22z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M6.59 2.09a1 1 0 0 1 1.07.16l12 10.62a1 1 0 0 1-.53 1.74l-3.53.48 1.77 3.94a1 1 0 0 1-.5 1.32l-3.43 1.56a1 1 0 0 1-1.32-.5l-1.77-3.94-2.69 2.35A1 1 0 0 1 6 19.07V3a1 1 0 0 1 .59-.91M8 16.87l2.05-1.79.1-.07a1 1 0 0 1 1.47.41l1.91 4.25 1.6-.73-1.9-4.25a1 1 0 0 1 .77-1.4l2.7-.37L8 5.22z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorOgFillDuotone.displayName = 'CursorOgFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorOgFillDuotone, CursorOgFillDuotone as CursorOgFillDuotoneIcon, CursorOgFillDuotone as SiCursorOgFillDuotone };
export default CursorOgFillDuotone;
export type { CursorOgFillDuotoneProps };
