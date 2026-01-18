import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SoccerBallRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerBallRegularDuotone = memo(
  forwardRef<SVGSVGElement, SoccerBallRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M13.88 2.94q.97.2 1.87.6l-3 1.88v2.73l2.92 2.5 2.53-.82.93-3.72q.64.79 1.12 1.7l-.58 2.33 1.56 1.31a9 9 0 0 1-.08 1.9l-2.48-2.1-2.61.86-1.2 2.8 1.56 2.14 3.48-.24q-.53.86-1.23 1.6l-2.1.14-.75 1.87q-.9.4-1.87.62l1.26-3.1-1.6-2.19h-3.23L8.8 17.94l1.26 3.1a9 9 0 0 1-1.87-.62l-.76-1.87-2.1-.15a9 9 0 0 1-1.22-1.59l3.48.24 1.56-2.15-1.2-2.8-2.6-.84-2.5 2.08a9 9 0 0 1-.07-1.89l1.56-1.3-.58-2.33q.47-.92 1.12-1.71l.93 3.72 2.53.83 2.92-2.5V5.41l-3-1.88q.9-.4 1.87-.6L12 4.12zM9.4 11.71l1.08 2.54h3.02l1.08-2.54L12 9.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallRegularDuotone.displayName = 'SoccerBallRegularDuotone';

export { SoccerBallRegularDuotone };
export type { SoccerBallRegularDuotoneProps };
