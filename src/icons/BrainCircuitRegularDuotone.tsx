import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrainCircuitRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrainCircuitRegularDuotone = memo(
  forwardRef<SVGSVGElement, BrainCircuitRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brain-circuit-duotone" {...props}>
      <path d="M14.52 14.86q.36.05.55.36l.86 1.5q.27-.07.57-.07a2.55 2.55 0 1 1-1.87.82L14 16.35h-1.24v-1.5h1.77m1.98 3.29a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1M19.2 10.35a2.55 2.55 0 1 1-2.44 3.3h-4.01v-1.5h4.01a2.55 2.55 0 0 1 2.44-1.8m0 1.5a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1M16.5 2.25a2.55 2.55 0 0 1 .75 4.99V9.3c0 .41-.34.75-.75.75h-3.75v-1.5h3V7.24a2.55 2.55 0 0 1 .75-4.99m0 1.5a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1" opacity={0.4} />
        <path fillRule="evenodd" d="M9.75 2.25q.67 0 1.26.2c1.37.48 1.74 1.94 1.74 2.97v13c0 .98-.32 2.27-1.48 2.86q-.9.46-1.97.47a4.35 4.35 0 0 1-4.33-3.92 4.4 4.4 0 0 1-2.4-2.4l-.02-.04a4 4 0 0 1-.18-.57l-.01-.07-.1-.57v-.09a4 4 0 0 1 .1-1.25l.02-.1a4 4 0 0 1 .3-.82l.02-.04.13-.25.04-.07.1-.15.07-.1.14-.2.06-.07.12-.14.07-.08.17-.16A3.88 3.88 0 0 1 6 5.09q.08-.3.2-.57l.02-.04.13-.24q0-.03.03-.05.23-.4.53-.71l.03-.03.02-.03.02-.02.08-.07.06-.06.14-.12.09-.07.04-.04.03-.02.05-.03.13-.1q.03 0 .05-.03l.06-.04.09-.05.1-.05.04-.02.22-.11.03-.01.2-.09.08-.03h.04q.04-.02.07-.03l.07-.02.11-.03h.02v-.01l.28-.06h.05a4 4 0 0 1 .64-.06m0 1.5c-.65 0-1.24.26-1.67.68l-.03.03a2.4 2.4 0 0 0-.6 2.38.75.75 0 0 1-1.44.42l-.11-.51a2.4 2.4 0 0 0-1.05 3.07l.12-.05a.75.75 0 0 1 .56 1.39 2.84 2.84 0 0 0 .27 5.37 3 3 0 0 0 1.51.03.75.75 0 1 1 .38 1.45q-.53.15-1.09.14h-.05a2.85 2.85 0 0 0 4.04 1.8c.4-.21.66-.76.66-1.53v-13c0-.86-.3-1.4-.72-1.54a2 2 0 0 0-.78-.13" clipRule="evenodd" />
    </IconBase>
  ))
);

BrainCircuitRegularDuotone.displayName = 'BrainCircuitRegularDuotone';

// Triple export pattern (lucide-react style)
export { BrainCircuitRegularDuotone, BrainCircuitRegularDuotone as BrainCircuitRegularDuotoneIcon, BrainCircuitRegularDuotone as SiBrainCircuitRegularDuotone };
export default BrainCircuitRegularDuotone;
export type { BrainCircuitRegularDuotoneProps };
