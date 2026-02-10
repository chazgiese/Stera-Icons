import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AirplaneBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AirplaneBoldDuotone = memo(
  forwardRef<SVGSVGElement, AirplaneBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="airplane-bold-duotone" {...props}>
      <path d="M13.9 13.2a1 1 0 0 0 .8 1.6h.51l-3.66 5.04A2.8 2.8 0 0 1 9.28 21h-1.1L8 20.99a1.45 1.45 0 0 1-1.14-2.02l1.83-4.22 1.48.05a1 1 0 0 0 .96-.65l-.01.05-2.1 4.8h.26a.8.8 0 0 0 .65-.33l3.96-5.46zM9.28 3c.9 0 1.74.43 2.27 1.16L15.2 9.2h-.51a1 1 0 0 0-.8 1.6v-.01L9.92 5.33A.8.8 0 0 0 9.28 5h-.25l2.09 4.8.01.04a1 1 0 0 0-.96-.64l-1.47.05-1.84-4.22A1.45 1.45 0 0 1 8.19 3z" opacity={0.4} />
        <path fill="currentColor" d="M11.2 13.83a1 1 0 0 1-1.03.97l-3.45-.12-.73 1.3a2.1 2.1 0 0 1-1.85 1.07H3.5c-.86 0-1.53-.75-1.44-1.61L2.44 12l-.38-3.44c-.1-.86.58-1.61 1.44-1.61h.64c.77 0 1.48.41 1.85 1.08l.73 1.29 3.45-.12a1 1 0 0 1 .06 2l-4.05.13a1 1 0 0 1-.9-.5L4.25 9a.1.1 0 0 0-.1-.06h-.03l.32 2.94v.07l.01.03v.12l-.33 2.94h.02q.08 0 .11-.06l1.03-1.82a1 1 0 0 1 .9-.5l4.05.13a1 1 0 0 1 .97 1.03m6.88-4.63c.98 0 1.92.39 2.62 1.08l1 1.01.07.08a1 1 0 0 1-.06 1.34l-1.01 1a3.7 3.7 0 0 1-2.62 1.09H14.7a1 1 0 0 1 0-2h3.38c.45 0 .88-.18 1.2-.5l.3-.3-.3-.3a1.7 1.7 0 0 0-1.2-.5H14.7a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

AirplaneBoldDuotone.displayName = 'AirplaneBoldDuotone';

// Triple export pattern (lucide-react style)
export { AirplaneBoldDuotone, AirplaneBoldDuotone as AirplaneBoldDuotoneIcon, AirplaneBoldDuotone as SiAirplaneBoldDuotone };
export default AirplaneBoldDuotone;
export type { AirplaneBoldDuotoneProps };
