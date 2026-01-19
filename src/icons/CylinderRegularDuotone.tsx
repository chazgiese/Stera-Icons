import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CylinderRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CylinderRegularDuotone = memo(
  forwardRef<SVGSVGElement, CylinderRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cylinder-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25c2.28 0 4.37.34 5.92.93.77.29 1.45.65 1.95 1.1.5.43.88 1.01.88 1.72 0 .7-.38 1.29-.88 1.73s-1.18.8-1.95 1.1c-1.55.58-3.64.92-5.92.92s-4.37-.34-5.92-.93a6 6 0 0 1-1.95-1.1A2.3 2.3 0 0 1 3.25 5c0-.7.38-1.29.88-1.73s1.18-.8 1.95-1.1c1.55-.58 3.64-.92 5.92-.92m0 1.5c-2.14 0-4.05.33-5.4.83q-1 .39-1.47.81c-.32.28-.38.49-.38.61s.06.33.38.6q.46.43 1.48.82c1.34.5 3.25.83 5.39.83s4.05-.33 5.4-.83a5 5 0 0 0 1.47-.81c.32-.28.38-.49.38-.61s-.06-.33-.38-.6q-.46-.43-1.48-.82c-1.34-.5-3.25-.83-5.39-.83" clipRule="evenodd" />
        <path fill="currentColor" d="M3.25 5c0 .7.38 1.29.88 1.73q.28.24.62.45V19c0 .12.06.33.38.6q.46.43 1.48.82c1.34.5 3.25.83 5.39.83s4.05-.33 5.4-.83a5 5 0 0 0 1.47-.81c.32-.28.38-.49.38-.61V7.18q.35-.21.62-.45c.5-.44.88-1.02.88-1.73v14c0 .7-.38 1.29-.88 1.73s-1.18.8-1.95 1.1c-1.55.58-3.64.92-5.92.92s-4.37-.34-5.92-.93a6 6 0 0 1-1.95-1.1A2.3 2.3 0 0 1 3.25 19z" opacity={.4} />
    </IconBase>
  ))
);

CylinderRegularDuotone.displayName = 'CylinderRegularDuotone';

// Triple export pattern (lucide-react style)
export { CylinderRegularDuotone, CylinderRegularDuotone as CylinderRegularDuotoneIcon, CylinderRegularDuotone as SiCylinderRegularDuotone };
export type { CylinderRegularDuotoneProps };
