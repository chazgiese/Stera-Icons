import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MicroscopeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicroscopeRegularDuotone = memo(
  forwardRef<SVGSVGElement, MicroscopeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="microscope-duotone" {...props}>
      <path d="M12.25 7.75h-.75a6.75 6.75 0 0 0 0 13.5H6.76a8.24 8.24 0 0 1 4.74-15h.75zM19 17.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M20 21.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M16 1.25A3.75 3.75 0 0 1 19.75 5v5.75a2 2 0 0 1-2 2h-.02l.02.25a1.75 1.75 0 1 1-3.48-.25h-.02a2 2 0 0 1-2-2V5A3.75 3.75 0 0 1 16 1.25m0 1.5c-1.24 0-2.25 1-2.25 2.25v5.75c0 .28.22.5.5.5h3.5a.5.5 0 0 0 .5-.5V5c0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

MicroscopeRegularDuotone.displayName = 'MicroscopeRegularDuotone';

// Triple export pattern (lucide-react style)
export { MicroscopeRegularDuotone, MicroscopeRegularDuotone as MicroscopeRegularDuotoneIcon, MicroscopeRegularDuotone as SiMicroscopeRegularDuotone };
export default MicroscopeRegularDuotone;
export type { MicroscopeRegularDuotoneProps };
