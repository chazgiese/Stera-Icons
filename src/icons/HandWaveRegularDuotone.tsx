import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandWaveRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandWaveRegularDuotone = memo(
  forwardRef<SVGSVGElement, HandWaveRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-wave-duotone" {...props}>
      <path d="M4.22 15.8c.39-.15.82.04.98.42a8.6 8.6 0 0 0 2.4 3.18.75.75 0 1 1-.9 1.2 10 10 0 0 1-2.9-3.82.75.75 0 0 1 .42-.98M18.67 2.99a3.7 3.7 0 0 1 2.71 1.27c.64.7 1.06 1.63 1.06 2.5a.75.75 0 0 1-1.5 0c0-.42-.22-1-.67-1.49a2.2 2.2 0 0 0-1.6-.78.75.75 0 0 1 0-1.5" opacity={0.4} />
        <path fillRule="evenodd" d="M9.88 4a2.36 2.36 0 0 1 3.21.86l1.84 3.17a2.34 2.34 0 0 1 2.35-2.2c1.27 0 2.3 1 2.35 2.27l.39 2.54a7.1 7.1 0 0 1-3.16 8.6 7.2 7.2 0 0 1-9.8-2.61l-2.8-4.84a2.34 2.34 0 0 1 1.68-3.5l-.1-.17A2.34 2.34 0 0 1 9 4.89q.3-.55.88-.88m1.92 1.62a.86.86 0 0 0-1.17-.31.84.84 0 0 0-.32 1.15l2.41 4.15a.75.75 0 0 1-1.3.75l-2.8-4.84a.86.86 0 0 0-1.17-.3.84.84 0 0 0-.32 1.14l3.01 5.19a.75.75 0 0 1-1.3.75l-1.8-3.1-.05-.08a.86.86 0 0 0-1.12-.24.84.84 0 0 0-.31 1.15l2.8 4.84a5.7 5.7 0 0 0 7.75 2.07 5.6 5.6 0 0 0 2.44-7l-.4-2.65-.01-.1a.85.85 0 0 0-1.4-.66q-.3.24-.31.65l-.03 2.6q-.01.41-.37.64l-.06.04a3 3 0 0 0-.73.73 2 2 0 0 0-.3.83c-.02.3.05.7.33 1.19a.75.75 0 0 1-1.3.75 3.6 3.6 0 0 1-.52-2.04 3 3 0 0 1 .54-1.56q.35-.5.68-.79z" clipRule="evenodd" />
    </IconBase>
  ))
);

HandWaveRegularDuotone.displayName = 'HandWaveRegularDuotone';

// Triple export pattern (lucide-react style)
export { HandWaveRegularDuotone, HandWaveRegularDuotone as HandWaveRegularDuotoneIcon, HandWaveRegularDuotone as SiHandWaveRegularDuotone };
export default HandWaveRegularDuotone;
export type { HandWaveRegularDuotoneProps };
