import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TennisBallBoldProps = Omit<IconBaseProps, 'children'>;

const TennisBallBold = memo(
  forwardRef<SVGSVGElement, TennisBallBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="tennis-ball-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a10.97 10.97 0 0 1 11 11 10.97 10.97 0 0 1-11 11A10.97 10.97 0 0 1 1 12 10.97 10.97 0 0 1 12 1m0 2c-2.1 0-4.04.72-5.57 1.93a10.96 10.96 0 0 1 0 14.14 8.96 8.96 0 0 0 11.14 0 10.96 10.96 0 0 1 0-14.14A9 9 0 0 0 12 3M5 6.35a8.96 8.96 0 0 0 0 11.3 8.96 8.96 0 0 0 0-11.3m14 0a8.96 8.96 0 0 0 0 11.3 8.96 8.96 0 0 0 0-11.3" clipRule="evenodd" />
    </IconBase>
  ))
);

TennisBallBold.displayName = 'TennisBallBold';

// Triple export pattern (lucide-react style)
export { TennisBallBold, TennisBallBold as TennisBallBoldIcon, TennisBallBold as SiTennisBallBold };
export type { TennisBallBoldProps };
