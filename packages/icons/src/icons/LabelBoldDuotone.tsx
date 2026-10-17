import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelBoldDuotone = memo(
  forwardRef<SVGSVGElement, LabelBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.38 16.74" clipRule="evenodd" opacity={0.4} />
        <path d="m22.53 12.23-.02.23-.05.22q.06-.23.07-.45" opacity={0.4} />
        <path d="M17.62 5.86c.36-.26.84-.24 1.18.02l.12.1V6l.06.06q0 .03.03.04l2.97 4.17c.75 1.04.75 2.44 0 3.48l-2.97 4.17c-.32.45-.95.55-1.4.23s-.55-.95-.23-1.4l2.98-4.16c.24-.35.24-.81 0-1.16l-2.98-4.16c-.32-.45-.21-1.08.24-1.4" />
        <path fillRule="evenodd" d="m18.93 5.99.05.06zm.08.1-.03-.04z" clipRule="evenodd" opacity={.4} />
        <path d="M15.46 4c1.29 0 2.5.62 3.25 1.67l3.27 4.59-2.97-4.17-.03-.04-.05-.06h-.01l-.12-.11c-.34-.26-.82-.28-1.18-.02-.45.32-.56.95-.24 1.4l-.3-.42C16.71 6.3 16.1 6 15.46 6H6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h9.46c.64 0 1.25-.31 1.62-.84l.3-.42c-.32.45-.21 1.08.24 1.4s1.07.22 1.39-.23l-.3.42c-.75 1.05-1.96 1.67-3.25 1.67H6c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4z" opacity={.4} />
    </IconBase>
  ))
);

LabelBoldDuotone.displayName = 'LabelBoldDuotone';

// Triple export pattern
export { LabelBoldDuotone, LabelBoldDuotone as LabelBoldDuotoneIcon, LabelBoldDuotone as SiLabelBoldDuotone };
export default LabelBoldDuotone;
export type { LabelBoldDuotoneProps };
