import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DatabasePlusRegularProps = Omit<IconBaseProps, 'children'>;

const DatabasePlusRegular = memo(
  forwardRef<SVGSVGElement, DatabasePlusRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-plus" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25c2.28 0 4.37.34 5.92.93.77.29 1.45.65 1.95 1.1.5.43.88 1.01.88 1.72v5.71a.75.75 0 1 1-1.5 0V7.18q-.6.37-1.33.64c-1.55.59-3.64.93-5.92.93s-4.37-.34-5.92-.93q-.74-.28-1.33-.64V12c0 .16.12.47.72.86q.87.58 2.53.97a.75.75 0 1 1-.33 1.46 10 10 0 0 1-2.92-1.1V19c0 .12.06.33.38.6q.46.43 1.48.82a16 16 0 0 0 5.68.83.75.75 0 0 1 .03 1.5H12c-2.28 0-4.37-.34-5.92-.93a6 6 0 0 1-1.95-1.1A2.3 2.3 0 0 1 3.25 19V5c0-.7.38-1.29.88-1.73s1.18-.8 1.95-1.1c1.55-.58 3.64-.92 5.92-.92m0 1.5c-2.14 0-4.05.33-5.4.83q-1 .39-1.47.81c-.32.28-.38.49-.38.61s.06.33.38.6q.46.43 1.48.82c1.34.5 3.25.83 5.39.83s4.05-.33 5.4-.83a5 5 0 0 0 1.47-.81c.32-.28.38-.49.38-.61s-.06-.33-.38-.6q-.46-.43-1.48-.82c-1.34-.5-3.25-.83-5.39-.83" clipRule="evenodd" />
        <path fill="currentColor" d="M16 11.25c.42 0 .75.34.75.75v3.25H20a.75.75 0 0 1 0 1.5h-3.25V20a.75.75 0 0 1-1.5 0v-3.25H12a.75.75 0 0 1 0-1.5h3.25V12c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

DatabasePlusRegular.displayName = 'DatabasePlusRegular';

// Triple export pattern (lucide-react style)
export { DatabasePlusRegular, DatabasePlusRegular as DatabasePlusRegularIcon, DatabasePlusRegular as SiDatabasePlusRegular };
export default DatabasePlusRegular;
export type { DatabasePlusRegularProps };
