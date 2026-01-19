import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScrollTextFillProps = Omit<IconBaseProps, 'children'>;

const ScrollTextFill = memo(
  forwardRef<SVGSVGElement, ScrollTextFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scroll-text-fill" {...props}>
      <path fill="currentColor" d="M13.5 10.5a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM15 7a1 1 0 1 1 0 2h-5a1 1 0 0 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M16.5 3a3 3 0 0 1 3 3v9h1.25c.97 0 1.75.78 1.75 1.75V18a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-7.5H3.25c-.97 0-1.75-.78-1.75-1.75V6a3 3 0 0 1 3-3zM7.33 5a3 3 0 0 1 .17 1v12a1 1 0 0 0 1 1h.1a1 1 0 0 0 .9-1v-1.25c0-.97.78-1.75 1.75-1.75h6.25V6a1 1 0 0 0-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrollTextFill.displayName = 'ScrollTextFill';

// Triple export pattern (lucide-react style)
export { ScrollTextFill, ScrollTextFill as ScrollTextFillIcon, ScrollTextFill as SiScrollTextFill };
export type { ScrollTextFillProps };
