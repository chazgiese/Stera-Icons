import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RulersBoldProps = Omit<IconBaseProps, 'children'>;

const RulersBold = memo(
  forwardRef<SVGSVGElement, RulersBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="rulers-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.75 2C20.99 2 22 3 22 4.25v3.5C22 8.99 21 10 19.75 10H10v9.75C10 20.99 9 22 7.75 22h-3.5C3.01 22 2 21 2 19.75V4.25C2 3.01 3 2 4.25 2zM4 19.75c0 .14.11.25.25.25h3.5c.14 0 .25-.11.25-.25V18H7a1 1 0 1 1 0-2h1v-2H7a1 1 0 1 1 0-2h1v-2H4zM4.2 4a.3.3 0 0 0-.16.11.3.3 0 0 0-.04.14V8h4V4H4.2M10 8h2V7a1 1 0 1 1 2 0v1h2V7a1 1 0 1 1 2 0v1h1.75c.14 0 .25-.11.25-.25v-3.5a.25.25 0 0 0-.25-.25H10z" clipRule="evenodd" />
    </IconBase>
  ))
);

RulersBold.displayName = 'RulersBold';

// Triple export pattern (lucide-react style)
export { RulersBold, RulersBold as RulersBoldIcon, RulersBold as SiRulersBold };
export type { RulersBoldProps };
