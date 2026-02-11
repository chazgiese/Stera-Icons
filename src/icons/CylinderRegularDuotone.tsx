import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CylinderRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CylinderRegularDuotone = memo(
  forwardRef<SVGSVGElement, CylinderRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cylinder-duotone" {...props}>
      <path d="M4.25 5.7c0 .66.35 1.2.8 1.6q.3.29.7.52V18.3c0 .09.04.26.3.5q.4.36 1.27.71c1.16.45 2.82.74 4.68.74s3.52-.3 4.68-.74q.87-.35 1.26-.71c.27-.24.31-.41.31-.5V7.82q.4-.24.7-.52c.45-.4.8-.94.8-1.6v12.6c0 .66-.35 1.2-.8 1.6-.44.41-1.05.75-1.73 1a15 15 0 0 1-5.22.85 15 15 0 0 1-5.22-.84 6 6 0 0 1-1.74-1c-.44-.41-.79-.95-.79-1.61z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.25c2 0 3.85.31 5.22.84.68.26 1.29.6 1.74 1s.79.95.79 1.61-.35 1.2-.8 1.6c-.44.41-1.05.74-1.73 1a15 15 0 0 1-5.22.85 15 15 0 0 1-5.22-.84 6 6 0 0 1-1.74-1c-.44-.41-.79-.95-.79-1.61s.35-1.2.8-1.6c.44-.41 1.05-.75 1.73-1A15 15 0 0 1 12 2.24m0 1.5c-1.86 0-3.52.3-4.68.74q-.87.34-1.26.71c-.27.24-.31.41-.31.5s.04.26.3.5q.4.37 1.27.7c1.16.46 2.82.75 4.68.75s3.52-.3 4.68-.74q.87-.35 1.26-.71c.27-.24.31-.41.31-.5s-.04-.26-.3-.5a4 4 0 0 0-1.27-.71A14 14 0 0 0 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

CylinderRegularDuotone.displayName = 'CylinderRegularDuotone';

// Triple export pattern (lucide-react style)
export { CylinderRegularDuotone, CylinderRegularDuotone as CylinderRegularDuotoneIcon, CylinderRegularDuotone as SiCylinderRegularDuotone };
export default CylinderRegularDuotone;
export type { CylinderRegularDuotoneProps };
