import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DatabaseRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DatabaseRegularDuotone = memo(
  forwardRef<SVGSVGElement, DatabaseRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-duotone" {...props}>
      <path fill="currentColor" d="M4.75 12c0 .12.06.33.38.6q.46.43 1.48.82c1.34.5 3.25.83 5.39.83s4.05-.33 5.4-.83a5 5 0 0 0 1.47-.81c.32-.28.38-.49.38-.61v2.18q-.6.37-1.33.64c-1.55.59-3.64.93-5.92.93s-4.37-.34-5.92-.93q-.74-.28-1.33-.64z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25c2.28 0 4.37.34 5.92.93.77.29 1.45.65 1.95 1.1.5.43.88 1.01.88 1.72v14c0 .7-.38 1.29-.88 1.73s-1.18.8-1.95 1.1c-1.55.58-3.64.92-5.92.92s-4.37-.34-5.92-.93a6 6 0 0 1-1.95-1.1A2.3 2.3 0 0 1 3.25 19V5c0-.7.38-1.29.88-1.73s1.18-.8 1.95-1.1c1.55-.58 3.64-.92 5.92-.92m7.25 5.93q-.6.37-1.33.64c-1.55.59-3.64.93-5.92.93s-4.37-.34-5.92-.93q-.74-.28-1.33-.64V19c0 .12.06.33.38.6q.46.43 1.48.82c1.34.5 3.25.83 5.39.83s4.05-.33 5.4-.83a5 5 0 0 0 1.47-.81c.32-.28.38-.49.38-.61zM12 2.75c-2.14 0-4.05.33-5.4.83q-1 .39-1.47.81c-.32.28-.38.49-.38.61s.06.33.38.6q.46.43 1.48.82c1.34.5 3.25.83 5.39.83s4.05-.33 5.4-.83a5 5 0 0 0 1.47-.81c.32-.28.38-.49.38-.61s-.06-.33-.38-.6q-.46-.43-1.48-.82c-1.34-.5-3.25-.83-5.39-.83" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseRegularDuotone.displayName = 'DatabaseRegularDuotone';

// Triple export pattern (lucide-react style)
export { DatabaseRegularDuotone, DatabaseRegularDuotone as DatabaseRegularDuotoneIcon, DatabaseRegularDuotone as SiDatabaseRegularDuotone };
export default DatabaseRegularDuotone;
export type { DatabaseRegularDuotoneProps };
