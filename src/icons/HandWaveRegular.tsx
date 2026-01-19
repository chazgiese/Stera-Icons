import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HandWaveRegularProps = Omit<IconBaseProps, 'children'>;

const HandWaveRegular = memo(
  forwardRef<SVGSVGElement, HandWaveRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-wave" {...props}>
      <path fill="currentColor" d="M2.72 16.3c.39-.15.82.04.98.42.3.77 1.3 2.6 2.75 3.68a.75.75 0 0 1-.9 1.2 11 11 0 0 1-3.25-4.32.75.75 0 0 1 .42-.98" />
        <path fill="currentColor" fillRule="evenodd" d="M9.3 2.6a2.7 2.7 0 0 1 3.65.98l2.48 4.27v-.37a2.66 2.66 0 0 1 2.68-2.66 2.67 2.67 0 0 1 2.67 2.57l.46 3.08a8.4 8.4 0 0 1-3.72 10.15 8.47 8.47 0 0 1-11.54-3.08l-3.37-5.8a2.66 2.66 0 0 1 2.13-4l-.24-.4c-.74-1.28-.3-2.91.98-3.65.88-.5 1.94-.45 2.75.05q.35-.7 1.07-1.13m2.35 1.73a1.2 1.2 0 0 0-1.6-.42A1.16 1.16 0 0 0 9.6 5.5l2.9 4.97a.75.75 0 0 1-1.3.76L7.82 5.42a1.2 1.2 0 0 0-1.6-.43 1.16 1.16 0 0 0-.43 1.6l3.6 6.21a.75.75 0 0 1-1.29.76L5.94 9.82l-.06-.1a1.2 1.2 0 0 0-1.54-.32 1.16 1.16 0 0 0-.43 1.59l3.37 5.8a6.97 6.97 0 0 0 9.5 2.53 6.9 6.9 0 0 0 3-8.55l-.49-3.17v-.11c0-.64-.53-1.17-1.18-1.17a1.17 1.17 0 0 0-1.18 1.17l-.03 3.11q-.01.41-.37.64l-.08.05a3 3 0 0 0-.92.92c-.2.3-.36.66-.38 1.07-.03.4.06.9.42 1.51a.75.75 0 0 1-1.3.76 4 4 0 0 1-.62-2.37c.05-.72.31-1.33.63-1.8.28-.43.61-.76.88-.99z" clipRule="evenodd" />
        <path fill="currentColor" d="M19.5 1.75c1.26 0 2.32.63 3.05 1.43s1.2 1.84 1.2 2.82a.75.75 0 0 1-1.5 0 3 3 0 0 0-.8-1.8 2.7 2.7 0 0 0-1.95-.95.75.75 0 0 1 0-1.5" />
    </IconBase>
  ))
);

HandWaveRegular.displayName = 'HandWaveRegular';

// Triple export pattern (lucide-react style)
export { HandWaveRegular, HandWaveRegular as HandWaveRegularIcon, HandWaveRegular as SiHandWaveRegular };
export type { HandWaveRegularProps };
