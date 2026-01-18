import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FootballRegularProps = Omit<IconBaseProps, 'children'>;

const FootballRegular = memo(
  forwardRef<SVGSVGElement, FootballRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13.47 7.47c.3-.3.77-.3 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.47-.47L13.06 12l.47.47a.75.75 0 0 1-1.06 1.06l-.47-.47L10.06 15l.47.47a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 1 1 1.06-1.06l.47.47L10.94 12l-.47-.47a.75.75 0 1 1 1.06-1.06l.47.47L13.94 9l-.47-.47a.75.75 0 0 1 0-1.06" />
        <path fill="currentColor" fillRule="evenodd" d="M12.82 1.71c2.68-.54 5.43-.42 7.65.3.72.23 1.3.8 1.53 1.53.71 2.21.83 4.96.29 7.64a14.4 14.4 0 0 1-3.76 7.35c-2 2-4.67 3.22-7.35 3.76s-5.43.42-7.64-.3c-.73-.23-1.3-.8-1.54-1.52a15.5 15.5 0 0 1-.29-7.65 14.4 14.4 0 0 1 3.76-7.35c2-2 4.67-3.22 7.35-3.76M20 3.43a14 14 0 0 0-6.88-.25c-2.46.5-4.84 1.6-6.59 3.35a13 13 0 0 0-3.35 6.59c-.5 2.46-.38 4.95.25 6.88q.15.42.57.57c1.93.63 4.42.75 6.88.25s4.84-1.6 6.59-3.35a13 13 0 0 0 3.35-6.59c.5-2.46.38-4.95-.25-6.88a.9.9 0 0 0-.57-.57" clipRule="evenodd" />
    </IconBase>
  ))
);

FootballRegular.displayName = 'FootballRegular';

// Triple export pattern (lucide-react style)
export { FootballRegular, FootballRegular as FootballRegularIcon, FootballRegular as SiFootballRegular };
export type { FootballRegularProps };
