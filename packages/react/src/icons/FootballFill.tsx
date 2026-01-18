import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FootballFillProps = Omit<IconBaseProps, 'children'>;

const FootballFill = memo(
  forwardRef<SVGSVGElement, FootballFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.77 1.46c2.72-.54 5.51-.42 7.77.3.8.27 1.44.9 1.7 1.7.73 2.26.84 5.05.3 7.77a14.7 14.7 0 0 1-3.83 7.48 14.7 14.7 0 0 1-7.48 3.83c-2.72.54-5.51.43-7.77-.3a2.6 2.6 0 0 1-1.7-1.7 16 16 0 0 1-.3-7.77A14.7 14.7 0 0 1 5.3 5.3a14.7 14.7 0 0 1 7.48-3.83m1.94 5.83a1 1 0 0 0-1.42 1.42l.3.29L12 10.59l-.3-.3a1 1 0 0 0-1.4 1.42l.29.29L9 13.59l-.3-.3a1 1 0 0 0-1.4 1.42l2 2a1 1 0 0 0 1.4-1.42l-.29-.29L12 13.41l.3.3a1 1 0 0 0 1.4-1.42l-.29-.29L15 10.41l.3.3a1 1 0 0 0 1.4-1.42z" clipRule="evenodd" />
    </IconBase>
  ))
);

FootballFill.displayName = 'FootballFill';

// Triple export pattern (lucide-react style)
export { FootballFill, FootballFill as FootballFillIcon, FootballFill as SiFootballFill };
export type { FootballFillProps };
