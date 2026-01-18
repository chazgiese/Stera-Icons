import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HandRightRegularProps = Omit<IconBaseProps, 'children'>;

const HandRightRegular = memo(
  forwardRef<SVGSVGElement, HandRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14 1.25A2.75 2.75 0 0 1 16.75 4v.55a2.74 2.74 0 0 1 4 2.45v7a8.75 8.75 0 0 1-17.36 1.53L2.2 12.51A2.75 2.75 0 0 1 7 9.83l.25.42V5a2.75 2.75 0 0 1 4.31-2.26A2.8 2.8 0 0 1 14 1.25m0 1.5c-.69 0-1.25.56-1.25 1.25v7a.75.75 0 0 1-1.5 0V5a1.25 1.25 0 0 0-2.5 0v8a.75.75 0 0 1-1.4.38l-1.64-2.8a1.25 1.25 0 0 0-2.23 1.14l.06.11.05.1 1.22 3.12.02.07.02.08a7.25 7.25 0 0 0 14.4-1.2V7a1.25 1.25 0 0 0-2.5 0v4.5a.75.75 0 0 1-1.5 0V4c0-.69-.56-1.25-1.25-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

HandRightRegular.displayName = 'HandRightRegular';

export { HandRightRegular };
export type { HandRightRegularProps };
