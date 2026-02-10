import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrainCircuitBoldProps = Omit<IconBaseProps, 'children'>;

const BrainCircuitBold = memo(
  forwardRef<SVGSVGElement, BrainCircuitBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="brain-circuit-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.5 2a2.8 2.8 0 0 1 1 5.41V9.3a1 1 0 0 1-1 1H13v1.6h3.59a2.8 2.8 0 1 1 0 2H13v.7h1.55a1 1 0 0 1 .74.5l.77 1.34q.21-.04.44-.04a2.8 2.8 0 1 1-2.17 1.04l-.49-.84H13v1.82c0 1.01-.33 2.42-1.61 3.08q-.95.49-2.09.5a4.6 4.6 0 0 1-4.56-4h-.03a5 5 0 0 1-.54-.3l-.03-.01q-.4-.26-.73-.58l-.03-.03a5 5 0 0 1-.6-.72l-.05-.07-.12-.2-.03-.05-.13-.26-.02-.04-.1-.24-.03-.06-.1-.28v-.04a5 5 0 0 1-.18-.93v-.08a5 5 0 0 1 0-.64v-.07q.03-.3.1-.6v-.08l.09-.3.01-.04a5 5 0 0 1 .23-.56l.05-.1.1-.18q0-.04.04-.08a5 5 0 0 1 .54-.74l.08-.08.03-.03a4.13 4.13 0 0 1 2.5-5.72l.1-.27.03-.06.12-.27.01-.02.3-.51.05-.05q.07-.12.17-.22l.02-.03.18-.2.03-.03.1-.1.04-.03.06-.06.21-.17.05-.04.06-.04.09-.07.1-.06.06-.04.16-.1h.02l.04-.03.09-.04.23-.11.02-.01.25-.1.08-.02.26-.08.08-.02.24-.05h.04l.1-.02.17-.02h.01a4 4 0 0 1 1.73.2c1.53.53 1.91 2.14 1.91 3.2V8.3h2.5v-.89a2.8 2.8 0 0 1 1-5.41M9.75 4A2.16 2.16 0 0 0 7.6 6.15q0 .32.09.61a1 1 0 1 1-1.92.57l-.05-.17A2.15 2.15 0 0 0 5 9.49a1 1 0 0 1 .63 1.9A2.6 2.6 0 0 0 4 13.8a2.6 2.6 0 0 0 3.25 2.52 1 1 0 0 1 .5 1.94q-.42.1-.85.13a2.6 2.6 0 0 0 3.58 1.33c.27-.14.52-.56.52-1.3v-13q0-.57-.18-.93-.16-.32-.37-.37a2 2 0 0 0-.7-.12m6.75 14.4a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6m2.7-6.3a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6M16.5 4a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6" clipRule="evenodd" />
    </IconBase>
  ))
);

BrainCircuitBold.displayName = 'BrainCircuitBold';

// Triple export pattern (lucide-react style)
export { BrainCircuitBold, BrainCircuitBold as BrainCircuitBoldIcon, BrainCircuitBold as SiBrainCircuitBold };
export default BrainCircuitBold;
export type { BrainCircuitBoldProps };
