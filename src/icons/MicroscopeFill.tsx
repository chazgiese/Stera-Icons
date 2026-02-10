import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicroscopeFillProps = Omit<IconBaseProps, 'children'>;

const MicroscopeFill = memo(
  forwardRef<SVGSVGElement, MicroscopeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="microscope-fill" {...props}>
      <path fill="currentColor" d="M16 1.63a3.9 3.9 0 0 1 3.88 3.87v4.75c0 1.1-.83 1.99-1.89 2.1l.01.15a2 2 0 1 1-4 0v-.14a2.1 2.1 0 0 1-1.87-2.11V7.5H11a6 6 0 0 0 0 12h9a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1.71A8 8 0 0 1 11 5.5h1.13A3.9 3.9 0 0 1 16 1.63" />
        <path fill="currentColor" d="M19 16.5a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

MicroscopeFill.displayName = 'MicroscopeFill';

// Triple export pattern (lucide-react style)
export { MicroscopeFill, MicroscopeFill as MicroscopeFillIcon, MicroscopeFill as SiMicroscopeFill };
export default MicroscopeFill;
export type { MicroscopeFillProps };
