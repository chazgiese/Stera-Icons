import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrainCircuitBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrainCircuitBoldDuotone = memo(
  forwardRef<SVGSVGElement, BrainCircuitBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brain-circuit-bold-duotone" {...props}>
      <path d="M14.55 14.6a1 1 0 0 1 .74.5l.77 1.34q.21-.04.44-.04a2.8 2.8 0 1 1-2.17 1.04l-.49-.84H13v-2h1.5499999999999998m1.95 3.8a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6M19.2 10.1a2.8 2.8 0 1 1-2.61 3.8H13v-2h3.59a2.8 2.8 0 0 1 2.61-1.8m0 2a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6M16.5 2a2.8 2.8 0 0 1 1 5.41V9.3a1 1 0 0 1-1 1H13v-2h2.5v-.89a2.8 2.8 0 0 1 1-5.41m0 2a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6" opacity={0.4} />
        <path fillRule="evenodd" d="M9.75 2q.7 0 1.34.22c1.53.53 1.91 2.14 1.91 3.2v13c0 1.01-.33 2.42-1.61 3.08q-.95.49-2.09.5a4.6 4.6 0 0 1-4.56-4h-.03a5 5 0 0 1-.54-.3l-.03-.01q-.4-.26-.73-.58l-.03-.03a5 5 0 0 1-.6-.72l-.05-.07-.12-.2-.03-.05-.13-.26-.02-.04-.1-.24-.03-.06-.1-.28v-.04a5 5 0 0 1-.18-.93v-.08a5 5 0 0 1 0-.64v-.07q.03-.3.1-.6v-.08l.09-.3.01-.04a5 5 0 0 1 .23-.56l.05-.1.1-.18q0-.04.04-.08a5 5 0 0 1 .54-.74l.08-.08.03-.03a4.13 4.13 0 0 1 2.5-5.72l.1-.27.03-.06.12-.27.01-.02.3-.51.05-.05q.07-.12.17-.22l.02-.03.18-.2.03-.03.1-.1.04-.03.06-.06.21-.17.05-.04.06-.04.09-.07.1-.06.06-.04.16-.1h.02l.04-.03.09-.04.19-.1q.02 0 .04-.02h.02l.25-.1.08-.02.26-.08.08-.02.24-.05h.04l.1-.02.17-.02h.01zm0 2A2.16 2.16 0 0 0 7.6 6.15q0 .32.09.61a1 1 0 1 1-1.92.57l-.05-.17A2.15 2.15 0 0 0 5 9.49a1 1 0 0 1 .63 1.9A2.6 2.6 0 0 0 4 13.8a2.6 2.6 0 0 0 3.25 2.52 1 1 0 0 1 .5 1.94q-.42.1-.85.13a2.6 2.6 0 0 0 3.58 1.33c.27-.14.52-.56.52-1.3v-13q0-.57-.18-.93-.16-.32-.37-.37a2 2 0 0 0-.7-.12" clipRule="evenodd" />
    </IconBase>
  ))
);

BrainCircuitBoldDuotone.displayName = 'BrainCircuitBoldDuotone';

// Triple export pattern (lucide-react style)
export { BrainCircuitBoldDuotone, BrainCircuitBoldDuotone as BrainCircuitBoldDuotoneIcon, BrainCircuitBoldDuotone as SiBrainCircuitBoldDuotone };
export default BrainCircuitBoldDuotone;
export type { BrainCircuitBoldDuotoneProps };
