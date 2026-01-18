import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HandLeftBoldProps = Omit<IconBaseProps, 'children'>;

const HandLeftBold = memo(
  forwardRef<SVGSVGElement, HandLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10 1a3 3 0 0 1 2.53 1.39A3 3 0 0 1 17 5v4.38a3 3 0 0 1 5.02 3.25l-1.16 2.97A9 9 0 0 1 3 14V7a3 3 0 0 1 4-2.83V4a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v7.5a1 1 0 0 1-2 0V7a1 1 0 0 0-2 0v7a7 7 0 0 0 13.93 1.06l.03-.1 1.22-3.12.07-.13.04-.1a1 1 0 0 0-1.78-.9l-1.65 2.8A1 1 0 0 1 15 13V5a1 1 0 0 0-2 0v6a1 1 0 0 1-2 0V4a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

HandLeftBold.displayName = 'HandLeftBold';

export { HandLeftBold };
export type { HandLeftBoldProps };
