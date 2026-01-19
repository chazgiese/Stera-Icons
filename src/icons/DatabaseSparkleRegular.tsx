import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DatabaseSparkleRegularProps = Omit<IconBaseProps, 'children'>;

const DatabaseSparkleRegular = memo(
  forwardRef<SVGSVGElement, DatabaseSparkleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="database-sparkle" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25c2.28 0 4.37.34 5.92.93.77.29 1.45.65 1.95 1.1.5.43.88 1.01.88 1.72v5.71a.75.75 0 1 1-1.5 0V7.18q-.6.37-1.33.64c-1.55.59-3.64.93-5.92.93s-4.37-.34-5.92-.93q-.74-.28-1.33-.64V12c0 .18.15.54.88.96q1.06.63 3 1a.75.75 0 1 1-.26 1.48c-1.39-.26-2.6-.66-3.5-1.18l-.12-.08V19c0 .12.06.33.38.6q.46.43 1.48.82a16 16 0 0 0 5.68.83.75.75 0 0 1 .03 1.5H12c-2.28 0-4.37-.34-5.92-.93a6 6 0 0 1-1.95-1.1A2.3 2.3 0 0 1 3.25 19V5c0-.7.38-1.29.88-1.73s1.18-.8 1.95-1.1c1.55-.58 3.64-.92 5.92-.92m0 1.5c-2.14 0-4.05.33-5.4.83q-1 .39-1.47.81c-.32.28-.38.49-.38.61s.06.33.38.6q.46.43 1.48.82c1.34.5 3.25.83 5.39.83s4.05-.33 5.4-.83a5 5 0 0 0 1.47-.81c.32-.28.38-.49.38-.61s-.06-.33-.38-.6q-.46-.43-1.48-.82c-1.34-.5-3.25-.83-5.39-.83" clipRule="evenodd" />
        <path fill="currentColor" d="M16.39 12.26a.65.65 0 0 1 1.22 0l.25.69a5.2 5.2 0 0 0 3.2 3.2l.68.24a.65.65 0 0 1 0 1.22l-.69.25a5.2 5.2 0 0 0-3.2 3.2l-.24.68a.65.65 0 0 1-1.22 0l-.25-.69a5.2 5.2 0 0 0-3.2-3.2l-.68-.24a.65.65 0 0 1 0-1.22l.69-.25a5.2 5.2 0 0 0 3.2-3.2z" />
    </IconBase>
  ))
);

DatabaseSparkleRegular.displayName = 'DatabaseSparkleRegular';

// Triple export pattern (lucide-react style)
export { DatabaseSparkleRegular, DatabaseSparkleRegular as DatabaseSparkleRegularIcon, DatabaseSparkleRegular as SiDatabaseSparkleRegular };
export type { DatabaseSparkleRegularProps };
