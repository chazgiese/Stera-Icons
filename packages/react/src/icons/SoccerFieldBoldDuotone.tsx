import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SoccerFieldBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerFieldBoldDuotone = memo(
  forwardRef<SVGSVGElement, SoccerFieldBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM4 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M13 8.65a3.5 3.5 0 0 1 0 6.7V19h-2v-3.65a3.5 3.5 0 0 1 0-6.7V5h2zm-1 1.85a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
        <path fill="currentColor" d="M5.5 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3v-2h1.5v-4H3V8zM21 10h-1.5v4H21v2h-2.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1H21z" />
    </IconBase>
  ))
);

SoccerFieldBoldDuotone.displayName = 'SoccerFieldBoldDuotone';

export { SoccerFieldBoldDuotone };
export type { SoccerFieldBoldDuotoneProps };
