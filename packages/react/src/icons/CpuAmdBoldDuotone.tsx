import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CpuAmdBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CpuAmdBoldDuotone = memo(
  forwardRef<SVGSVGElement, CpuAmdBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16 1a1 1 0 0 1 1 1v1.14q.67.11 1.27.4a5 5 0 0 1 2.19 2.19q.29.6.4 1.27H22a1 1 0 1 1 0 2h-1v2h1a1 1 0 1 1 0 2h-1v2h1a1 1 0 1 1 0 2h-1.14q-.11.67-.4 1.27a5 5 0 0 1-2.19 2.19q-.6.29-1.27.4V22a1 1 0 1 1-2 0v-1h-2v1a1 1 0 1 1-2 0v-1H9v1a1 1 0 1 1-2 0v-1.14q-.67-.11-1.27-.4a5 5 0 0 1-2.19-2.19q-.29-.6-.4-1.27H2a1 1 0 1 1 0-2h1v-2H2a1 1 0 1 1 0-2h1V9H2a1 1 0 0 1 0-2h1.14q.11-.67.4-1.27a5 5 0 0 1 2.19-2.19q.6-.29 1.27-.4V2a1 1 0 0 1 2 0v1h2V2a1 1 0 1 1 2 0v1h2V2a1 1 0 0 1 1-1m-5.6 4c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C5 8.47 5 9.26 5 10.4v3.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h3.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55v-3.2c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C15.53 5 14.74 5 13.6 5z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14.5 6.5q.5 0 .9.02.37.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v3.17q.02.4-.06.84-.09.35-.27.65c-.16.25-.37.45-.55.63l-1.83 1.83c-.18.18-.38.4-.63.55q-.3.18-.65.27c-.29.07-.58.06-.84.06H9.5q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87q-.02-.4-.02-.9v-5q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.14.76-.17.4-.02.9-.02zm-5 2-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74v5l.03.87q.04.06.1.1l.13.02.74.01h3.54l.07-.04.04-.03.23-.22 1.83-1.83.25-.27.03-.07V13l.01-.32V9.5l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02-.74-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

CpuAmdBoldDuotone.displayName = 'CpuAmdBoldDuotone';

// Triple export pattern (lucide-react style)
export { CpuAmdBoldDuotone, CpuAmdBoldDuotone as CpuAmdBoldDuotoneIcon, CpuAmdBoldDuotone as SiCpuAmdBoldDuotone };
export type { CpuAmdBoldDuotoneProps };
