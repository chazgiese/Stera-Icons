import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RectangleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RectangleFillDuotone = memo(
  forwardRef<SVGSVGElement, RectangleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rectangle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.4 3.5q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v3.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05H8.6q-1.44.01-2.38-.05A5 5 0 0 1 4.46 20a4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76Q2 15.34 2 13.9v-3.8q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44q.94-.06 2.38-.05zm-6.8 2c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23a2.5 2.5 0 0 0-1.1 1.1c-.1.2-.18.5-.23 1.01C4 8.42 4 9.1 4 10.1v3.8c0 1 0 1.68.04 2.22.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h6.8c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23a2.5 2.5 0 0 0 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22v-3.8c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1c-.2-.1-.5-.18-1.01-.23-.54-.04-1.22-.04-2.22-.04z" clipRule="evenodd" />
        <path fill="currentColor" d="M15.4 5.5c1 0 1.68 0 2.22.04.52.05.8.13 1.01.23q.73.37 1.1 1.1c.1.2.18.5.23 1.01.04.54.04 1.22.04 2.22v3.8c0 1 0 1.68-.04 2.22-.05.52-.13.8-.23 1.01a2.5 2.5 0 0 1-1.1 1.1c-.2.1-.5.18-1.01.23-.54.04-1.22.04-2.22.04H8.6c-1 0-1.68 0-2.22-.04-.52-.05-.8-.13-1.01-.23a2.5 2.5 0 0 1-1.1-1.1c-.1-.2-.18-.5-.23-1.01C4 15.58 4 14.9 4 13.9v-3.8c0-1 0-1.68.04-2.22.05-.52.13-.8.23-1.01a2.5 2.5 0 0 1 1.1-1.1c.2-.1.5-.18 1.01-.23.54-.04 1.22-.04 2.22-.04z" opacity={.4} />
    </IconBase>
  ))
);

RectangleFillDuotone.displayName = 'RectangleFillDuotone';

// Triple export pattern (lucide-react style)
export { RectangleFillDuotone, RectangleFillDuotone as RectangleFillDuotoneIcon, RectangleFillDuotone as SiRectangleFillDuotone };
export default RectangleFillDuotone;
export type { RectangleFillDuotoneProps };
