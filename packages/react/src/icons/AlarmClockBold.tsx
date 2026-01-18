import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlarmClockBoldProps = Omit<IconBaseProps, 'children'>;

const AlarmClockBold = memo(
  forwardRef<SVGSVGElement, AlarmClockBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 7.5a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1H8.5a1 1 0 0 1 0-2H11V8.5a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 4a9 9 0 0 1 6.25 15.47l1.53 1.9a1 1 0 0 1-1.56 1.25l-1.55-1.93a9 9 0 0 1-9.34 0l-1.55 1.93a1 1 0 0 1-1.56-1.25l1.52-1.9A9 9 0 0 1 12 4m0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14" clipRule="evenodd" />
        <path fill="currentColor" d="M5.25 1.33a2.5 2.5 0 0 1 3.42.92l.04.1a1 1 0 0 1-.41 1.27l-2.6 1.5a1 1 0 0 1-1.36-.37 2.5 2.5 0 0 1 .91-3.42M15.34 2.25a2.5 2.5 0 0 1 4.33 2.5l-.06.09a1 1 0 0 1-1.31.28l-2.6-1.5a1 1 0 0 1-.36-1.37" />
    </IconBase>
  ))
);

AlarmClockBold.displayName = 'AlarmClockBold';

// Triple export pattern (lucide-react style)
export { AlarmClockBold, AlarmClockBold as AlarmClockBoldIcon, AlarmClockBold as SiAlarmClockBold };
export type { AlarmClockBoldProps };
