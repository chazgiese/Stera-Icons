import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeClosedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeClosedBoldDuotone = memo(
  forwardRef<SVGSVGElement, EyeClosedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="eye-closed-bold-duotone" {...props}>
      <path d="M8.19 14.56q.93.33 1.94.49l-.65 2.23a1 1 0 0 1-1.92-.56zM16.44 16.72a1 1 0 1 1-1.92.56l-.65-2.23q1-.16 1.94-.49zM3.53 11.46q.66.75 1.46 1.37l-1.81 1.68a1 1 0 0 1-1.36-1.47zM22.18 13.04a1 1 0 0 1-1.36 1.47l-1.81-1.68q.8-.62 1.46-1.37z" opacity={0.4} />
        <path fill="currentColor" d="M20.07 8.54a1 1 0 0 1 1.77.92A11 11 0 0 1 12 15.2c-4.3 0-8.05-2.32-9.84-5.74a1 1 0 0 1 1.77-.92A9 9 0 0 0 12 13.2a9 9 0 0 0 8.07-4.66" />
    </IconBase>
  ))
);

EyeClosedBoldDuotone.displayName = 'EyeClosedBoldDuotone';

// Triple export pattern (lucide-react style)
export { EyeClosedBoldDuotone, EyeClosedBoldDuotone as EyeClosedBoldDuotoneIcon, EyeClosedBoldDuotone as SiEyeClosedBoldDuotone };
export default EyeClosedBoldDuotone;
export type { EyeClosedBoldDuotoneProps };
