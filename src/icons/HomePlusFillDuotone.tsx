import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HomePlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HomePlusFillDuotone = memo(
  forwardRef<SVGSVGElement, HomePlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-plus-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.95 1.94a4 4 0 0 1 2.1 0c.82.23 1.53.8 2.52 1.58l3.54 2.76c.7.54 1.2.92 1.56 1.41q.46.64.67 1.38c.17.6.16 1.22.16 2.1v3.63q.01 1.33-.05 2.22c-.05.6-.15 1.15-.41 1.66-.41.8-1.06 1.45-1.86 1.86-.51.26-1.06.36-1.66.41q-.9.06-2.22.05H8.7q-1.34.01-2.22-.05a4 4 0 0 1-1.66-.41 4.3 4.3 0 0 1-1.86-1.86 4 4 0 0 1-.41-1.66q-.06-.9-.05-2.22v-3.63c0-.88 0-1.5.16-2.1q.2-.75.67-1.38c.37-.49.87-.87 1.56-1.4L8.43 3.5c.98-.76 1.7-1.34 2.52-1.57M12 8.5a1 1 0 0 0-1 1v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 8.5a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

HomePlusFillDuotone.displayName = 'HomePlusFillDuotone';

// Triple export pattern (lucide-react style)
export { HomePlusFillDuotone, HomePlusFillDuotone as HomePlusFillDuotoneIcon, HomePlusFillDuotone as SiHomePlusFillDuotone };
export default HomePlusFillDuotone;
export type { HomePlusFillDuotoneProps };
