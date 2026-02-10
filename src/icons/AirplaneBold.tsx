import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AirplaneBoldProps = Omit<IconBaseProps, 'children'>;

const AirplaneBold = memo(
  forwardRef<SVGSVGElement, AirplaneBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="airplane-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.28 3c.9 0 1.74.43 2.27 1.16L15.2 9.2h2.87c.98 0 1.92.39 2.62 1.08l1 1.01a1 1 0 0 1 0 1.42l-1 1a3.7 3.7 0 0 1-2.62 1.09h-2.87l-3.66 5.04A2.8 2.8 0 0 1 9.28 21h-1.1a1.45 1.45 0 0 1-1.32-2.03l1.84-4.22-1.98-.07-.73 1.3a2.1 2.1 0 0 1-1.85 1.07H3.5c-.86 0-1.53-.75-1.44-1.61L2.44 12l-.38-3.44c-.1-.86.58-1.61 1.44-1.61h.64c.77 0 1.48.41 1.85 1.08l.73 1.29 1.98-.07-1.84-4.22A1.45 1.45 0 0 1 8.19 3zm1.84 6.8.04.12a1 1 0 0 1-.93 1.28l-4.05.13a1 1 0 0 1-.9-.5L4.25 9a.1.1 0 0 0-.1-.06h-.03l.32 2.94v.07l.01.03v.11l-.33 2.95h.02q.08 0 .11-.06l1.03-1.82a1 1 0 0 1 .9-.5l4.05.13.13.01a1 1 0 0 1 .76 1.39L9.02 19h.26a.8.8 0 0 0 .65-.33l3.96-5.46a1 1 0 0 1 .8-.41h3.4c.44 0 .87-.18 1.2-.5l.3-.3-.3-.3a1.7 1.7 0 0 0-1.21-.5H14.7a1 1 0 0 1-.81-.41L9.93 5.33A.8.8 0 0 0 9.28 5h-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

AirplaneBold.displayName = 'AirplaneBold';

// Triple export pattern (lucide-react style)
export { AirplaneBold, AirplaneBold as AirplaneBoldIcon, AirplaneBold as SiAirplaneBold };
export default AirplaneBold;
export type { AirplaneBoldProps };
