import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PedestalBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PedestalBoldDuotone = memo(
  forwardRef<SVGSVGElement, PedestalBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pedestal-bold-duotone" {...props}>
      <path d="M10.25 15a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M13.75 15a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M19.83 10A3 3 0 0 1 17 14H7a3 3 0 0 1-2.83-4H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z" opacity={0.4} />
        <path d="M6 13.83A3 3 0 0 0 7 14h1v6a1 1 0 1 1-2 0zM18 20a1 1 0 1 1-2 0v-6h1q.53 0 1-.17z" />
        <path fillRule="evenodd" d="M19 3q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v1q0 .5-.02.9-.01.41-.23.87-.33.65-.98.98c-.3.16-.6.2-.87.23q-.4.02-.9.02H5q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87Q2 7.5 2 7V6q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.15.76-.17Q4.5 3 5 3zM5 5l-.87.03a.3.3 0 0 0-.1.1l-.02.13L4 6v1l.03.87q.04.06.1.1l.13.02L5 8h14l.87-.03a.3.3 0 0 0 .1-.1l.02-.13L20 7V6l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02L19 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

PedestalBoldDuotone.displayName = 'PedestalBoldDuotone';

// Triple export pattern (lucide-react style)
export { PedestalBoldDuotone, PedestalBoldDuotone as PedestalBoldDuotoneIcon, PedestalBoldDuotone as SiPedestalBoldDuotone };
export default PedestalBoldDuotone;
export type { PedestalBoldDuotoneProps };
