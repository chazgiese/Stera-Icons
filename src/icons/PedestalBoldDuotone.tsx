import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PedestalBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PedestalBoldDuotone = memo(
  forwardRef<SVGSVGElement, PedestalBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pedestal-bold-duotone" {...props}>
      <path fill="currentColor" d="M19.82 8.98a3 3 0 0 1-1.87 3.86l.03.26q.03.4.02.9v7a1 1 0 1 1-2 0v-7l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02L15 13H9l-.87.03a.3.3 0 0 0-.1.1l-.02.13L8 14v7a1 1 0 1 1-2 0v-7q0-.5.02-.9l.03-.26a3 3 0 0 1-1.87-3.86Q4.55 9 5 9h2a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2h2q.45 0 .82-.02" opacity={.4} />
        <path fill="currentColor" d="M10.25 14a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1M13.75 14a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M19 2q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v1q0 .5-.02.9-.01.41-.23.87-.33.65-.98.98c-.3.16-.6.2-.87.23Q19.5 9 19 9H5q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87Q2 6.5 2 6V5q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.15.76-.17Q4.5 2 5 2zM5 4l-.87.03a.3.3 0 0 0-.1.1l-.02.13L4 5v1l.03.87q.04.06.1.1l.13.02L5 7h14l.87-.03a.3.3 0 0 0 .1-.1l.02-.13L20 6V5l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02L19 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

PedestalBoldDuotone.displayName = 'PedestalBoldDuotone';

// Triple export pattern (lucide-react style)
export { PedestalBoldDuotone, PedestalBoldDuotone as PedestalBoldDuotoneIcon, PedestalBoldDuotone as SiPedestalBoldDuotone };
export default PedestalBoldDuotone;
export type { PedestalBoldDuotoneProps };
