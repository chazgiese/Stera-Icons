import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutListRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutListRegularDuotone = memo(
  forwardRef<SVGSVGElement, LayoutListRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-list-duotone" {...props}>
      <path d="M7.6 13.25q.6 0 1.05.02t.87.23q.65.33.98.98c.15.28.2.58.23.87q.02.44.02 1.05v2.2q0 .6-.02 1.05t-.23.87q-.33.65-.98.98-.43.2-.87.23t-1.05.02H5.4q-.6 0-1.05-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98 2 2 0 0 1-.23-.87q-.03-.44-.02-1.05v-2.2q0-.6.02-1.05c.03-.3.08-.59.23-.87q.33-.65.98-.98c.28-.15.58-.2.87-.23q.44-.02 1.05-.02zm-2.2 1.5c-.43 0-.71 0-.92.02a1 1 0 0 0-.32.06 1 1 0 0 0-.33.33 1 1 0 0 0-.06.32q-.03.29-.02.92v2.2q0 .63.02.92.02.28.06.32.11.22.33.33c.04.02.11.05.32.06q.29.03.92.02h2.2q.62 0 .92-.02c.2-.01.28-.04.32-.06a1 1 0 0 0 .33-.33 1 1 0 0 0 .06-.32q.02-.29.02-.92v-2.2q0-.62-.02-.92a1 1 0 0 0-.06-.32 1 1 0 0 0-.33-.33 1 1 0 0 0-.32-.06q-.29-.02-.92-.02zM7.6 2.25q.6 0 1.05.02a2.25 2.25 0 0 1 1.86 1.2q.2.45.22.88.02.44.02 1.05v2.2q0 .6-.02 1.05t-.23.87q-.33.65-.98.98c-.28.15-.58.2-.87.23q-.44.02-1.05.02H5.4q-.6 0-1.05-.02a2 2 0 0 1-.87-.23 2.3 2.3 0 0 1-.98-.98 2 2 0 0 1-.23-.87q-.03-.44-.02-1.05V5.4q0-.6.02-1.05a2.25 2.25 0 0 1 1.2-1.86q.45-.2.88-.22.44-.03 1.05-.02zm-2.2 1.5c-.43 0-.71 0-.92.02a1 1 0 0 0-.32.06 1 1 0 0 0-.33.33 1 1 0 0 0-.06.32q-.03.29-.02.92v2.2q0 .62.02.92c.01.2.04.28.06.32q.11.22.33.33c.04.02.11.05.32.06q.29.02.92.02h2.2q.62 0 .92-.02c.2-.01.28-.04.32-.06a1 1 0 0 0 .33-.33 1 1 0 0 0 .06-.32q.02-.29.02-.92V5.4c0-.43 0-.71-.02-.92a1 1 0 0 0-.06-.32 1 1 0 0 0-.33-.33 1 1 0 0 0-.32-.06q-.29-.03-.92-.02z" opacity={0.4} />
        <path fill="currentColor" d="M21 19.25a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5zM21 14.25a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5zM21 8.25a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5zM21 3.25a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

LayoutListRegularDuotone.displayName = 'LayoutListRegularDuotone';

// Triple export pattern (lucide-react style)
export { LayoutListRegularDuotone, LayoutListRegularDuotone as LayoutListRegularDuotoneIcon, LayoutListRegularDuotone as SiLayoutListRegularDuotone };
export default LayoutListRegularDuotone;
export type { LayoutListRegularDuotoneProps };
