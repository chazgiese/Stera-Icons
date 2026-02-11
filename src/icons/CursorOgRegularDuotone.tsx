import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorOgRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorOgRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorOgRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-og-duotone" {...props}>
      <path d="M13.43 14.53c.12.33.45.54.8.5l1-.14 1.91 4.25c.17.37 0 .82-.37.99l-3.43 1.55a.75.75 0 0 1-1-.37l-1.9-4.25.76-.66a.75.75 0 0 0 .17-.92l.02.05L13.41 20l2.06-.94-2.02-4.48z" opacity={.4} />
        <path d="M6.7 2.32a.8.8 0 0 1 .8.12l12 10.62a.75.75 0 0 1-.4 1.3l-4.86.66a.75.75 0 0 1-.2-1.49l3.24-.43-9.53-8.43v12.75l2.46-2.15a.75.75 0 0 1 1 1.13L7.5 19.64a.75.75 0 0 1-1.25-.57V3c0-.3.17-.56.44-.68" />
    </IconBase>
  ))
);

CursorOgRegularDuotone.displayName = 'CursorOgRegularDuotone';

// Triple export pattern (lucide-react style)
export { CursorOgRegularDuotone, CursorOgRegularDuotone as CursorOgRegularDuotoneIcon, CursorOgRegularDuotone as SiCursorOgRegularDuotone };
export default CursorOgRegularDuotone;
export type { CursorOgRegularDuotoneProps };
