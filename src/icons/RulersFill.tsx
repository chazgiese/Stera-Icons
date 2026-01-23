import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RulersFillProps = Omit<IconBaseProps, 'children'>;

const RulersFill = memo(
  forwardRef<SVGSVGElement, RulersFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="rulers-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.75 2C20.99 2 22 3 22 4.25v3.5C22 8.99 21 10 19.75 10H10v9.75C10 20.99 9 22 7.75 22h-3.5C3.01 22 2 21 2 19.75V4c0-1.1.9-2 2-2zM4 19.75c0 .14.11.25.25.25h3.5c.14 0 .25-.11.25-.25V18H7a1 1 0 1 1 0-2h1v-2H7a1 1 0 1 1 0-2h1v-2H4zM10 8h2V7a1 1 0 1 1 2 0v1h2V7a1 1 0 1 1 2 0v1h1.75c.14 0 .25-.11.25-.25v-3.5a.25.25 0 0 0-.25-.25H10z" clipRule="evenodd" />
    </IconBase>
  ))
);

RulersFill.displayName = 'RulersFill';

// Triple export pattern (lucide-react style)
export { RulersFill, RulersFill as RulersFillIcon, RulersFill as SiRulersFill };
export default RulersFill;
export type { RulersFillProps };
