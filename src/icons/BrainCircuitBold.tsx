import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrainCircuitBoldProps = Omit<IconBaseProps, 'children'>;

const BrainCircuitBold = memo(
  forwardRef<SVGSVGElement, BrainCircuitBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="brain-circuit-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 1a3 3 0 0 1 1 5.83V9a1 1 0 0 1-1 1h-4v2h4.17a3 3 0 1 1 0 2H13v1h1.69a1 1 0 0 1 .87.5l.9 1.55A3.02 3.02 0 0 1 20 20a3 3 0 1 1-5.28-1.95l-.6-1.05H13v2.13c0 1.11-.36 2.63-1.73 3.33q-1.04.52-2.27.54a5 5 0 0 1-4.96-4.4 5 5 0 0 1-2.37-2.1l-.03-.05q-.16-.29-.28-.6l-.03-.06a5 5 0 0 1-.2-2.9v-.03l.03-.1.07-.25.03-.1.23-.57.07-.14.3-.49q.04-.07.1-.15l.06-.09.39-.45.05-.05A4.48 4.48 0 0 1 5.19 4.2a5 5 0 0 1 .43-.96l.01-.03q.27-.45.62-.81l.03-.03.04-.04.05-.05.1-.09.04-.04.04-.03.03-.03.03-.03.36-.27.01-.01.1-.07.03-.01.22-.13.03-.02.03-.01.02-.01.28-.14.03-.02.14-.05.1-.04.05-.02a4 4 0 0 1 .61-.16l.1-.02.06-.01.1-.02.11-.01h.08L9.22 1h.07a5 5 0 0 1 1.67.23C12.58 1.8 13 3.52 13 4.68V8h3V6.83A3 3 0 0 1 17 1M9.5 3A2.5 2.5 0 0 0 7 5.5q0 .38.1.71a1 1 0 0 1-1.91.58l-.1-.36a2.5 2.5 0 0 0-.94 2.92 1 1 0 0 1 .72 1.87A3 3 0 0 0 3 14a3 3 0 0 0 3.75 2.9 1 1 0 0 1 .5 1.94 5 5 0 0 1-1.08.15 3 3 0 0 0 4.19 1.68c.36-.18.64-.7.64-1.54V4.68c0-.92-.34-1.42-.7-1.55A3 3 0 0 0 9.5 3M17 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
    </IconBase>
  ))
);

BrainCircuitBold.displayName = 'BrainCircuitBold';

// Triple export pattern (lucide-react style)
export { BrainCircuitBold, BrainCircuitBold as BrainCircuitBoldIcon, BrainCircuitBold as SiBrainCircuitBold };
export default BrainCircuitBold;
export type { BrainCircuitBoldProps };
