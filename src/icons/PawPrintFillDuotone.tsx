import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PawPrintFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PawPrintFillDuotone = memo(
  forwardRef<SVGSVGElement, PawPrintFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="paw-print-fill-duotone" {...props}>
      <path d="M4 7.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M20 7.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M8.5 2.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M15.5 2.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5" opacity={0.4} />
        <path fill="currentColor" d="M12 9.5c1.27 0 2.2.33 2.9.94.66.57 1.01 1.32 1.27 1.84q.11.24.53.73l.92 1.1c.6.75 1.38 1.84 1.38 3.06a4.14 4.14 0 0 1-4.27 4.33c-.72 0-1.32-.16-1.77-.29-.5-.14-.74-.21-.96-.21s-.45.07-.96.21c-.45.13-1.05.29-1.77.29a4.1 4.1 0 0 1-3.2-1.38A4.5 4.5 0 0 1 5 17.17c0-1.22.78-2.3 1.38-3.06.3-.38.68-.8.92-1.1q.42-.5.53-.73c.26-.52.61-1.27 1.26-1.84.7-.6 1.64-.94 2.91-.94" />
    </IconBase>
  ))
);

PawPrintFillDuotone.displayName = 'PawPrintFillDuotone';

// Triple export pattern (lucide-react style)
export { PawPrintFillDuotone, PawPrintFillDuotone as PawPrintFillDuotoneIcon, PawPrintFillDuotone as SiPawPrintFillDuotone };
export default PawPrintFillDuotone;
export type { PawPrintFillDuotoneProps };
