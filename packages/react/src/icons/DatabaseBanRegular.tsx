import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DatabaseBanRegularProps = Omit<IconBaseProps, 'children'>;

const DatabaseBanRegular = memo(
  forwardRef<SVGSVGElement, DatabaseBanRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25c2.28 0 4.37.34 5.92.93.77.29 1.45.65 1.95 1.1.5.43.88 1.01.88 1.72v5.71a.75.75 0 1 1-1.5 0V7.18q-.6.37-1.33.64c-1.55.59-3.64.93-5.92.93s-4.37-.34-5.92-.93q-.74-.28-1.33-.64V12c0 .1.04.27.25.48q.3.34 1.03.7c.96.46 2.37.82 4.04.98a.75.75 0 1 1-.14 1.5 14 14 0 0 1-4.55-1.13q-.33-.15-.63-.35V19c0 .12.06.33.38.6q.46.43 1.48.82a16 16 0 0 0 5.68.83.75.75 0 0 1 .03 1.5H12c-2.28 0-4.37-.34-5.92-.93a6 6 0 0 1-1.95-1.1A2.3 2.3 0 0 1 3.25 19V5c0-.7.38-1.29.88-1.73s1.18-.8 1.95-1.1c1.55-.58 3.64-.92 5.92-.92m0 1.5c-2.14 0-4.05.33-5.4.83q-1 .39-1.47.81c-.32.28-.38.49-.38.61s.06.33.38.6q.46.43 1.48.82c1.34.5 3.25.83 5.39.83s4.05-.33 5.4-.83a5 5 0 0 0 1.47-.81c.32-.28.38-.49.38-.61s-.06-.33-.38-.6q-.46-.43-1.48-.82c-1.34-.5-3.25-.83-5.39-.83" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M17 12.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m-2.77 3.04q-.46.76-.48 1.71a3.25 3.25 0 0 0 4.96 2.77zM17 13.75q-.96.02-1.7.48l4.47 4.48q.47-.76.48-1.71c0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

DatabaseBanRegular.displayName = 'DatabaseBanRegular';

// Triple export pattern (lucide-react style)
export { DatabaseBanRegular, DatabaseBanRegular as DatabaseBanRegularIcon, DatabaseBanRegular as SiDatabaseBanRegular };
export type { DatabaseBanRegularProps };
