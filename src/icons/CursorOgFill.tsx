import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorOgFillProps = Omit<IconBaseProps, 'children'>;

const CursorOgFill = memo(
  forwardRef<SVGSVGElement, CursorOgFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-og-fill" {...props}>
      <path d="M6.59 2.09a1 1 0 0 1 1.07.16l12 10.62a1 1 0 0 1-.53 1.74l-3.53.48 1.77 3.94a1 1 0 0 1-.5 1.32l-3.43 1.56a1 1 0 0 1-1.32-.5l-1.77-3.94-2.69 2.35A1 1 0 0 1 6 19.07V3a1 1 0 0 1 .59-.91" />
    </IconBase>
  ))
);

CursorOgFill.displayName = 'CursorOgFill';

// Triple export pattern (lucide-react style)
export { CursorOgFill, CursorOgFill as CursorOgFillIcon, CursorOgFill as SiCursorOgFill };
export default CursorOgFill;
export type { CursorOgFillProps };
