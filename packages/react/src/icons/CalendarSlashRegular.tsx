import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CalendarSlashRegularProps = Omit<IconBaseProps, 'children'>;

const CalendarSlashRegular = memo(
  forwardRef<SVGSVGElement, CalendarSlashRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.44 12.94a3.63 3.63 0 1 1 5.12 5.12 3.63 3.63 0 0 1-5.12-5.12m.5 1.38a2.38 2.38 0 0 0 3.24 3.24zm3.74-.5a2.4 2.4 0 0 0-2.86-.38l3.24 3.24c.52-.91.4-2.09-.38-2.86" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M16 1.25c.41 0 .75.34.75.75v1.3a5 5 0 0 1 1.86.45l.05.02.02.01q.3.16.59.36l.03.03a5 5 0 0 1 1.03 1.03l.02.01q.2.3.37.6l.01.03.02.04.14.3c.2.48.28.98.32 1.58q.05.87.04 2.24v4.6q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H9.9q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.07-1.04-.06-2.69V10q-.01-1.37.04-2.24a5 5 0 0 1 .46-1.88l.02-.04.01-.02q.17-.32.37-.6l.02-.02q.1-.14.2-.26l.05-.06a5 5 0 0 1 .78-.71l.03-.03q.28-.2.59-.36l.02-.01.04-.02.3-.14c.47-.2.98-.28 1.57-.32V2a.75.75 0 0 1 1.5 0v1.25h6.5V2c0-.41.34-.75.75-.75M4.25 14.6c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h4.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57v-3.85H4.25zm4.5-9.85V6a.75.75 0 0 1-1.5 0V4.81a3.4 3.4 0 0 0-1.44.41 3.3 3.3 0 0 0-1.22 1.32c-.14.3-.24.69-.29 1.3q-.04.58-.05 1.41h15.5q-.01-.83-.05-1.42a3.5 3.5 0 0 0-.43-1.52 3.3 3.3 0 0 0-1.32-1.22 3 3 0 0 0-1.2-.28V6a.75.75 0 0 1-1.5 0V4.75h-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CalendarSlashRegular.displayName = 'CalendarSlashRegular';

// Triple export pattern (lucide-react style)
export { CalendarSlashRegular, CalendarSlashRegular as CalendarSlashRegularIcon, CalendarSlashRegular as SiCalendarSlashRegular };
export type { CalendarSlashRegularProps };
