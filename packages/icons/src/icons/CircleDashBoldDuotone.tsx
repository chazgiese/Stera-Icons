import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDashBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.54 16.45c.46-.31 1.08-.19 1.4.27q.93 1.4 2.34 2.35c.46.3.58.93.27 1.39s-.93.58-1.38.27q-1.74-1.16-2.9-2.9c-.3-.45-.18-1.08.27-1.38M19.07 16.72c.3-.46.93-.58 1.39-.27s.58.93.27 1.39q-1.16 1.72-2.9 2.89c-.45.3-1.08.18-1.38-.27-.31-.46-.19-1.08.27-1.4q1.4-.93 2.35-2.34M6.17 3.27c.45-.3 1.08-.18 1.38.27.31.46.19 1.08-.27 1.4q-1.4.93-2.35 2.34c-.3.46-.93.58-1.39.27s-.58-.93-.27-1.38q1.17-1.74 2.9-2.9M16.45 3.54c.3-.45.93-.58 1.39-.27q1.72 1.17 2.89 2.9c.3.45.18 1.08-.27 1.38-.46.31-1.08.19-1.4-.27q-.93-1.4-2.34-2.35c-.46-.3-.58-.93-.27-1.39" opacity={0.4} />
        <path d="M13.66 20.34c.54-.1 1.07.24 1.18.79.1.54-.25 1.06-.8 1.17q-.99.2-2.04.2t-2.05-.2c-.54-.1-.9-.63-.78-1.18.1-.54.63-.89 1.17-.78q.81.16 1.66.16t1.66-.16M1.7 9.95c.1-.54.63-.9 1.18-.78.54.1.89.63.78 1.17q-.16.81-.16 1.66t.16 1.66c.1.54-.24 1.07-.79 1.18-.54.1-1.06-.25-1.17-.8q-.2-.99-.2-2.04t.2-2.05M21.13 9.17c.54-.11 1.06.24 1.17.78q.2 1 .2 2.05t-.2 2.05c-.1.54-.63.9-1.18.79s-.89-.64-.78-1.18q.16-.81.16-1.66t-.16-1.66c-.1-.54.24-1.07.79-1.17M12 1.5q1.05 0 2.05.2c.54.1.9.63.79 1.18s-.64.89-1.18.78Q12.85 3.5 12 3.5t-1.66.16c-.54.1-1.07-.24-1.17-.79-.11-.54.24-1.06.78-1.17q1-.2 2.05-.2" />
    </IconBase>
  ))
);

CircleDashBoldDuotone.displayName = 'CircleDashBoldDuotone';

// Triple export pattern
export { CircleDashBoldDuotone, CircleDashBoldDuotone as CircleDashBoldDuotoneIcon, CircleDashBoldDuotone as SiCircleDashBoldDuotone };
export default CircleDashBoldDuotone;
export type { CircleDashBoldDuotoneProps };
