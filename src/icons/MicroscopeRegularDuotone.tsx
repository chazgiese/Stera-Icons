import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicroscopeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicroscopeRegularDuotone = memo(
  forwardRef<SVGSVGElement, MicroscopeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="microscope-duotone" {...props}>
      <path d="M12.25 7.25H11a6.25 6.25 0 1 0 0 12.5H6.42a7.74 7.74 0 0 1 4.58-14h1.25zM19 16.75a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M20 19.75a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M16 1.75a3.75 3.75 0 0 1 3.75 3.75v4.75a2 2 0 0 1-2 2h-.02l.02.25a1.75 1.75 0 1 1-3.48-.25h-.02a2 2 0 0 1-2-2V5.5A3.75 3.75 0 0 1 16 1.75m0 1.5c-1.24 0-2.25 1-2.25 2.25v4.75c0 .28.22.5.5.5h3.5a.5.5 0 0 0 .5-.5V5.5c0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

MicroscopeRegularDuotone.displayName = 'MicroscopeRegularDuotone';

// Triple export pattern (lucide-react style)
export { MicroscopeRegularDuotone, MicroscopeRegularDuotone as MicroscopeRegularDuotoneIcon, MicroscopeRegularDuotone as SiMicroscopeRegularDuotone };
export default MicroscopeRegularDuotone;
export type { MicroscopeRegularDuotoneProps };
