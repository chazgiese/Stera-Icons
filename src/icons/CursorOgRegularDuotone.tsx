import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorOgRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorOgRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorOgRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-og-duotone" {...props}>
      <path fill="currentColor" d="M11.6 15.67q0 .02.03.05l2.16 4.78 2.28-1.02-2.16-4.79-.02-.05c.12.33.44.53.8.49l1-.14 2.05 4.55a.75.75 0 0 1-.37 1l-3.65 1.64a.75.75 0 0 1-.99-.37l-2.06-4.55.77-.66a.75.75 0 0 0 .16-.93" opacity={.4} />
        <path fill="currentColor" d="M6.7 1.77a.8.8 0 0 1 .8.12l12.76 11.24a.75.75 0 0 1-.4 1.3l-5.17.7a.75.75 0 0 1-.2-1.49l3.54-.47L7.75 4.1v13.7l2.7-2.35a.75.75 0 1 1 .99 1.14L7.5 20.02a.75.75 0 0 1-1.25-.56V2.45c0-.3.17-.56.44-.68" />
    </IconBase>
  ))
);

CursorOgRegularDuotone.displayName = 'CursorOgRegularDuotone';

// Triple export pattern (lucide-react style)
export { CursorOgRegularDuotone, CursorOgRegularDuotone as CursorOgRegularDuotoneIcon, CursorOgRegularDuotone as SiCursorOgRegularDuotone };
export default CursorOgRegularDuotone;
export type { CursorOgRegularDuotoneProps };
