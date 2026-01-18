import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FootballBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FootballBoldDuotone = memo(
  forwardRef<SVGSVGElement, FootballBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.77 1.46c2.72-.54 5.51-.43 7.77.3.8.27 1.43.9 1.7 1.7.73 2.26.84 5.05.3 7.77a14.7 14.7 0 0 1-3.83 7.48 14.7 14.7 0 0 1-7.48 3.83c-2.72.54-5.51.43-7.77-.3a2.6 2.6 0 0 1-1.7-1.7 16 16 0 0 1-.3-7.77A14.7 14.7 0 0 1 5.3 5.3a14.7 14.7 0 0 1 7.48-3.83m7.16 2.2a14 14 0 0 0-6.76-.24A12.7 12.7 0 0 0 6.7 6.71a12.7 12.7 0 0 0-3.28 6.46 14 14 0 0 0 .24 6.76q.1.3.4.4c1.9.61 4.34.73 6.76.24a12.7 12.7 0 0 0 6.46-3.28 12.7 12.7 0 0 0 3.29-6.46 14 14 0 0 0-.25-6.76.6.6 0 0 0-.4-.4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13.3 7.3a1 1 0 0 1 1.4 0l2 2a1 1 0 1 1-1.4 1.4l-.3-.29L13.41 12l.3.3a1 1 0 1 1-1.42 1.4l-.29-.29L10.41 15l.3.3a1 1 0 0 1-1.42 1.4l-2-2a1 1 0 1 1 1.42-1.4l.29.29L10.59 12l-.3-.3a1 1 0 0 1 1.42-1.4l.29.29L13.59 9l-.3-.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

FootballBoldDuotone.displayName = 'FootballBoldDuotone';

export { FootballBoldDuotone };
export type { FootballBoldDuotoneProps };
