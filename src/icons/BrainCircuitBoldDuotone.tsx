import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BrainCircuitBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrainCircuitBoldDuotone = memo(
  forwardRef<SVGSVGElement, BrainCircuitBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brain-circuit-bold-duotone" {...props}>
      <path d="M14.69 15a1 1 0 0 1 .87.5l.9 1.55a3 3 0 0 0-1.74 1l-.6-1.05H13v-2zM17.17 12a3 3 0 0 0 0 2H13v-2zM18 9a1 1 0 0 1-1 1h-4V8h3V6.83a3 3 0 0 0 2 0z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.5 1q.76 0 1.46.24C12.58 1.8 13 3.52 13 4.68v14.45c0 1.11-.36 2.63-1.73 3.33q-1.04.52-2.27.54a5 5 0 0 1-4.96-4.4 5 5 0 0 1-2.37-2.1l-.03-.05q-.16-.29-.28-.6l-.03-.06a5 5 0 0 1-.2-2.9v-.03l.03-.1.07-.25.03-.1.23-.57.07-.14.3-.49q.04-.07.1-.15l.06-.09.39-.45.05-.05A4.48 4.48 0 0 1 5.19 4.2a5 5 0 0 1 .43-.96l.01-.03q.27-.45.62-.81l.03-.03.04-.04.05-.05.1-.09.04-.04.04-.03.03-.03.03-.03.36-.27.01-.01.1-.07.03-.01.22-.13.03-.02.03-.01.02-.01.28-.14.03-.02.14-.05.1-.04.05-.02a4 4 0 0 1 .61-.16l.1-.02.06-.01.1-.02.11-.01h.08L9.22 1h.07zm0 2A2.5 2.5 0 0 0 7 5.5q0 .38.1.71a1 1 0 0 1-1.91.58l-.1-.36a2.5 2.5 0 0 0-.94 2.92 1 1 0 0 1 .72 1.87A3 3 0 0 0 3 14a3 3 0 0 0 3.75 2.9 1 1 0 0 1 .5 1.94 5 5 0 0 1-1.08.15 3 3 0 0 0 4.19 1.68c.36-.18.64-.7.64-1.54V4.68c0-.92-.34-1.42-.7-1.55A3 3 0 0 0 9.5 3M17 17a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M20 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M17 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
    </IconBase>
  ))
);

BrainCircuitBoldDuotone.displayName = 'BrainCircuitBoldDuotone';

// Triple export pattern (lucide-react style)
export { BrainCircuitBoldDuotone, BrainCircuitBoldDuotone as BrainCircuitBoldDuotoneIcon, BrainCircuitBoldDuotone as SiBrainCircuitBoldDuotone };
export type { BrainCircuitBoldDuotoneProps };
