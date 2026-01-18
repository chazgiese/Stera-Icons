import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScrollFillProps = Omit<IconBaseProps, 'children'>;

const ScrollFill = memo(
  forwardRef<SVGSVGElement, ScrollFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20.75 15c.97 0 1.75.78 1.75 1.75V18a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-7.5H3.25c-.97 0-1.75-.78-1.75-1.75V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9zm-3.25 0V6a1 1 0 0 0-1-1H7.33a3 3 0 0 1 .17 1v12a1 1 0 0 0 1 1h.1a1 1 0 0 0 .9-1v-1.25c0-.97.78-1.75 1.75-1.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrollFill.displayName = 'ScrollFill';

export { ScrollFill };
export type { ScrollFillProps };
