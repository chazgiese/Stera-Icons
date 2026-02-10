import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CylinderBoldProps = Omit<IconBaseProps, 'children'>;

const CylinderBold = memo(
  forwardRef<SVGSVGElement, CylinderBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cylinder-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2c2.02 0 3.9.31 5.31.86.7.27 1.34.61 1.81 1.05.48.44.88 1.04.88 1.79v12.6c0 .75-.4 1.35-.88 1.79a6 6 0 0 1-1.81 1.05c-1.4.55-3.29.86-5.31.86s-3.9-.31-5.31-.86a6 6 0 0 1-1.81-1.05A2.4 2.4 0 0 1 4 18.3V5.7c0-.75.4-1.35.88-1.79a6 6 0 0 1 1.81-1.05C8.09 2.3 9.98 2 12 2m6 6.24q-.33.16-.69.3c-1.4.55-3.29.86-5.31.86s-3.9-.31-5.31-.86L6 8.24V18.3q0 0 .03.08t.2.23q.33.33 1.18.67c1.13.43 2.75.72 4.59.72s3.46-.29 4.59-.72q.85-.34 1.19-.67.15-.15.2-.23l.02-.08zM12 4c-1.84 0-3.46.29-4.59.72q-.85.34-1.19.67a1 1 0 0 0-.2.23L6 5.7q0 0 .03.08t.2.23q.33.33 1.18.67c1.13.43 2.75.72 4.59.72s3.46-.29 4.59-.72q.85-.34 1.19-.67.15-.15.2-.23L18 5.7q0 0-.03-.08a1 1 0 0 0-.2-.23 4 4 0 0 0-1.18-.67A13 13 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

CylinderBold.displayName = 'CylinderBold';

// Triple export pattern (lucide-react style)
export { CylinderBold, CylinderBold as CylinderBoldIcon, CylinderBold as SiCylinderBold };
export default CylinderBold;
export type { CylinderBoldProps };
