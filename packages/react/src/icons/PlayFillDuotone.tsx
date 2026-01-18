import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlayFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlayFillDuotone = memo(
  forwardRef<SVGSVGElement, PlayFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5.79 3.18c.2-.02.54.03 1.2.33s1.5.78 2.7 1.46L16.2 8.7c1.21.7 2.06 1.18 2.66 1.6s.82.69.9.88a2 2 0 0 1 0 1.64c-.08.19-.3.46-.9.88s-1.45.9-2.66 1.6L9.7 19.03c-1.2.68-2.04 1.16-2.7 1.46s-1 .35-1.2.33a2 2 0 0 1-1.4-.82c-.13-.17-.26-.48-.32-1.2C4 18.06 4 17.1 4 15.72V8.27c0-1.38 0-2.34.07-3.06.06-.73.19-1.04.31-1.21a2 2 0 0 1 1.4-.82" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.57 1.2c.76-.09 1.5.15 2.25.5q1.13.52 2.86 1.54l6.52 3.72q1.77 1 2.82 1.7c.69.48 1.27 1 1.58 1.7a4 4 0 0 1 0 3.27c-.3.7-.9 1.23-1.58 1.7-.7.5-1.64 1.03-2.82 1.7l-6.52 3.73q-1.73 1.02-2.86 1.55c-.76.35-1.5.58-2.25.5a4 4 0 0 1-2.8-1.63 4.3 4.3 0 0 1-.7-2.2q-.09-1.25-.07-3.25V8.27c0-1.34 0-2.41.08-3.24s.23-1.6.68-2.2a4 4 0 0 1 2.8-1.64m.22 1.98a2 2 0 0 0-1.4.82c-.13.17-.26.48-.32 1.2C4 5.94 4 6.9 4 8.28v7.46c0 1.38 0 2.34.07 3.06.06.73.19 1.04.31 1.21a2 2 0 0 0 1.4.82c.22.02.55-.03 1.21-.33s1.5-.78 2.7-1.46l6.52-3.73c1.21-.7 2.06-1.18 2.66-1.6s.82-.69.9-.88a2 2 0 0 0 0-1.64c-.08-.19-.3-.46-.9-.88s-1.45-.9-2.66-1.6L9.7 4.97a38 38 0 0 0-2.7-1.46c-.66-.3-1-.35-1.2-.33" clipRule="evenodd" />
    </IconBase>
  ))
);

PlayFillDuotone.displayName = 'PlayFillDuotone';

export { PlayFillDuotone };
export type { PlayFillDuotoneProps };
