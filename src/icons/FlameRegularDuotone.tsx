import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlameRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlameRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlameRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flame-duotone" {...props}>
      <path d="M12.12 10.76h.01l.06.02.08.02.06.03.12.07.04.03.01.01.16.14a14 14 0 0 1 1.68 1.83c.9 1.16 1.91 2.83 1.91 4.59q0 .6-.12 1.1A6 6 0 0 1 12 20.25c.6 0 1.3-.2 1.84-.64.51-.42.91-1.08.91-2.11 0-1.24-.74-2.57-1.6-3.66a14 14 0 0 0-1.17-1.3c-.3.32-.72.76-1.14 1.3-.85 1.1-1.59 2.42-1.59 3.66 0 1.03.4 1.69.91 2.1.54.45 1.24.65 1.84.65a6 6 0 0 1-4.13-1.65 5 5 0 0 1-.12-1.1c0-1.76 1.01-3.43 1.9-4.59a16 16 0 0 1 1.85-1.97h.01l.04-.04.12-.07.05-.03.09-.02.05-.02h.26" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.25h.11l.02.01.06.02.08.02.06.03.12.07.02.02h.01l.02.02.06.05a20 20 0 0 1 1.05.93A33 33 0 0 1 16.07 6a21 21 0 0 1 2.5 3.56 9 9 0 0 1 1.18 4.09c0 4.44-3.43 8.11-7.75 8.11s-7.75-3.67-7.75-8.11c0-1.4.5-2.8 1.18-4.09a21 21 0 0 1 2.5-3.56 33 33 0 0 1 3.5-3.5l.07-.05.02-.02.03-.02.12-.07.06-.03.08-.02.06-.02h.02zM11.99 4a30 30 0 0 0-2.92 2.96c-.85 1-1.7 2.13-2.32 3.3a7.4 7.4 0 0 0-1 3.38c0 3.69 2.83 6.61 6.25 6.61s6.25-2.92 6.25-6.61c0-1.06-.38-2.21-1-3.38a19 19 0 0 0-2.32-3.3A31 31 0 0 0 12.01 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlameRegularDuotone.displayName = 'FlameRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlameRegularDuotone, FlameRegularDuotone as FlameRegularDuotoneIcon, FlameRegularDuotone as SiFlameRegularDuotone };
export default FlameRegularDuotone;
export type { FlameRegularDuotoneProps };
