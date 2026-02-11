import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RectangleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RectangleBoldDuotone = memo(
  forwardRef<SVGSVGElement, RectangleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rectangle-bold-duotone" {...props}>
      <path d="M4 13.9c0 1 0 1.68.04 2.22.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h6.8c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23a2.5 2.5 0 0 0 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22V12h2v1.9q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05H8.6q-1.44.01-2.38-.05A5 5 0 0 1 4.46 20a4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76Q2 15.34 2 13.9V12h2z" opacity={.4} />
        <path d="M15.4 3.5q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38V12h-2v-1.9c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1c-.2-.1-.5-.18-1.01-.23-.54-.04-1.22-.04-2.22-.04H8.6c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23a2.5 2.5 0 0 0-1.1 1.1c-.1.2-.18.5-.23 1.01C4 8.42 4 9.1 4 10.1V12H2v-1.9q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44q.94-.06 2.38-.05z" />
    </IconBase>
  ))
);

RectangleBoldDuotone.displayName = 'RectangleBoldDuotone';

// Triple export pattern (lucide-react style)
export { RectangleBoldDuotone, RectangleBoldDuotone as RectangleBoldDuotoneIcon, RectangleBoldDuotone as SiRectangleBoldDuotone };
export default RectangleBoldDuotone;
export type { RectangleBoldDuotoneProps };
