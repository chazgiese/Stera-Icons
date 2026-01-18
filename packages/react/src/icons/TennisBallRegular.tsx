import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TennisBallRegularProps = Omit<IconBaseProps, 'children'>;

const TennisBallRegular = memo(
  forwardRef<SVGSVGElement, TennisBallRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25A10.7 10.7 0 0 1 22.75 12 10.7 10.7 0 0 1 12 22.75 10.7 10.7 0 0 1 1.25 12 10.7 10.7 0 0 1 12 1.25m0 1.5A9.2 9.2 0 0 0 6.07 4.9a10.7 10.7 0 0 1 0 14.2 9.2 9.2 0 0 0 11.86 0 10.7 10.7 0 0 1 0-14.2A9.2 9.2 0 0 0 12 2.75m-7 3.2a9.2 9.2 0 0 0 0 12.1 9.2 9.2 0 0 0 0-12.1m14 0a9.2 9.2 0 0 0 0 12.1 9.2 9.2 0 0 0 0-12.1" clipRule="evenodd" />
    </IconBase>
  ))
);

TennisBallRegular.displayName = 'TennisBallRegular';

export { TennisBallRegular };
export type { TennisBallRegularProps };
