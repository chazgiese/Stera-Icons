import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PawPrintBoldProps = Omit<IconBaseProps, 'children'>;

const PawPrintBold = memo(
  forwardRef<SVGSVGElement, PawPrintBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="paw-print-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 9.5c1.27 0 2.2.33 2.9.94.66.57 1.01 1.32 1.27 1.84q.11.24.53.73l.92 1.1c.6.75 1.38 1.84 1.38 3.06a4.14 4.14 0 0 1-4.27 4.33c-.72 0-1.32-.16-1.77-.29-.5-.14-.74-.21-.96-.21s-.45.07-.96.21c-.45.13-1.05.29-1.77.29a4.1 4.1 0 0 1-3.2-1.38A4.5 4.5 0 0 1 5 17.17c0-1.22.78-2.3 1.38-3.06.3-.38.68-.8.92-1.1q.42-.5.53-.73c.26-.52.61-1.27 1.26-1.84.7-.6 1.64-.94 2.91-.94m0 2c-.9 0-1.34.22-1.6.45-.3.26-.49.63-.78 1.21-.19.4-.5.8-.78 1.13-.32.38-.6.69-.9 1.07Q7 16.51 7 17.16c0 .63.2 1.22.57 1.64.35.4.89.7 1.7.7.43 0 .8-.1 1.23-.21.38-.1.93-.29 1.5-.29s1.12.18 1.5.29c.43.12.8.21 1.23.21.81 0 1.35-.3 1.7-.7.36-.42.57-1 .57-1.63q0-.66-.94-1.8c-.3-.4-.58-.7-.9-1.08-.28-.34-.6-.73-.79-1.13a4 4 0 0 0-.78-1.21c-.25-.23-.68-.45-1.59-.45M4 7.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M20 7.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8.5 2.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M15.5 2.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
    </IconBase>
  ))
);

PawPrintBold.displayName = 'PawPrintBold';

// Triple export pattern (lucide-react style)
export { PawPrintBold, PawPrintBold as PawPrintBoldIcon, PawPrintBold as SiPawPrintBold };
export default PawPrintBold;
export type { PawPrintBoldProps };
