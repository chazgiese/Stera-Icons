import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type IdVRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const IdVRegularDuotone = memo(
  forwardRef<SVGSVGElement, IdVRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.2 1.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v10.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H8.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V6.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-6.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.34-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v10.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h6.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V6.8c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 10.25a3.75 3.75 0 0 1 2.72 6.33 4.75 4.75 0 0 1 3.03 4.67h-1.5a3.25 3.25 0 0 0-2.61-3.44 10 10 0 0 0-1.64-.06c-.96 0-1.34 0-1.63.06a3.25 3.25 0 0 0-2.62 3.44h-1.5q0-.7.1-1.18a4.8 4.8 0 0 1 2.93-3.5A3.74 3.74 0 0 1 12 10.26m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
        <path fill="currentColor" d="M15 5.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

IdVRegularDuotone.displayName = 'IdVRegularDuotone';

// Triple export pattern (lucide-react style)
export { IdVRegularDuotone, IdVRegularDuotone as IdVRegularDuotoneIcon, IdVRegularDuotone as SiIdVRegularDuotone };
export type { IdVRegularDuotoneProps };
