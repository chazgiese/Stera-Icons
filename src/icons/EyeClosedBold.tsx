import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeClosedBoldProps = Omit<IconBaseProps, 'children'>;

const EyeClosedBold = memo(
  forwardRef<SVGSVGElement, EyeClosedBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="eye-closed-bold" {...props}>
      <path fill="currentColor" d="M20.07 8.54a1 1 0 1 1 1.77.92q-.57 1.08-1.37 2l1.71 1.58a1 1 0 0 1-1.36 1.47l-1.81-1.68q-1.43 1.11-3.2 1.73l.63 2.16a1 1 0 1 1-1.92.56l-.65-2.23a12 12 0 0 1-3.74 0l-.65 2.23a1 1 0 0 1-1.92-.56l.63-2.16q-1.76-.62-3.2-1.73l-1.81 1.68a1 1 0 0 1-1.36-1.47l1.71-1.58q-.8-.92-1.37-2a1 1 0 1 1 1.77-.92 8.8 8.8 0 0 0 5.73 4.37l.04.01h.01a10 10 0 0 0 4.58 0h.05a8.8 8.8 0 0 0 5.73-4.38" />
    </IconBase>
  ))
);

EyeClosedBold.displayName = 'EyeClosedBold';

// Triple export pattern (lucide-react style)
export { EyeClosedBold, EyeClosedBold as EyeClosedBoldIcon, EyeClosedBold as SiEyeClosedBold };
export default EyeClosedBold;
export type { EyeClosedBoldProps };
