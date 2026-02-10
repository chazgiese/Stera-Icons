import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CpuAmdBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CpuAmdBoldDuotone = memo(
  forwardRef<SVGSVGElement, CpuAmdBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cpu-amd-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.5 2a1 1 0 0 1 1 1v1q.5.12.97.34a5 5 0 0 1 2.19 2.19q.22.46.34.97h1a1 1 0 1 1 0 2h-.81V11H21a1 1 0 1 1 0 2h-.8l-.01 1.5H21a1 1 0 1 1 0 2h-1q-.12.5-.34.97a5 5 0 0 1-2.19 2.19q-.45.22-.97.34v1a1 1 0 1 1-2 0v-.81H13V21a1 1 0 1 1-2 0v-.8l-1.5-.01V21a1 1 0 1 1-2 0v-1a4 4 0 0 1-.97-.34 5 5 0 0 1-2.19-2.19q-.22-.45-.34-.97H3a1 1 0 1 1 0-2h.81V13H3a1 1 0 1 1 0-2h.8l.01-1.5H3a1 1 0 0 1 0-2h1q.12-.5.34-.97a5 5 0 0 1 2.19-2.19q.46-.22.97-.34V3a1 1 0 0 1 2 0v.81L11 3.8V3a1 1 0 1 1 2 0v.8l1.5.01V3a1 1 0 0 1 1-1m-4.3 3.8c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22c-.05.62-.05 1.41-.05 2.55v1.6c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h1.6c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55v-1.6c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28c-.62-.05-1.41-.05-2.55-.05z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14 7q.5 0 .9.02.37.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v2.17q.02.4-.06.84-.09.35-.27.65c-.16.25-.37.45-.55.63l-1.83 1.83c-.18.18-.38.4-.63.55q-.3.18-.65.27c-.29.07-.58.06-.84.06H10q-.5 0-.9-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98c-.16-.3-.2-.6-.23-.87Q7 14.5 7 14v-4q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.14.76-.17Q9.5 7 10 7zm-4 2-.87.03a.3.3 0 0 0-.1.1l-.02.13L9 10v4l.03.87q.04.06.1.1l.13.02.74.01h2.54l.07-.04.04-.03.23-.22 1.83-1.83.25-.27.03-.07v-.05l.01-.32V10l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02L14 9z" clipRule="evenodd" />
    </IconBase>
  ))
);

CpuAmdBoldDuotone.displayName = 'CpuAmdBoldDuotone';

// Triple export pattern (lucide-react style)
export { CpuAmdBoldDuotone, CpuAmdBoldDuotone as CpuAmdBoldDuotoneIcon, CpuAmdBoldDuotone as SiCpuAmdBoldDuotone };
export default CpuAmdBoldDuotone;
export type { CpuAmdBoldDuotoneProps };
