import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScrollTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScrollTextFillDuotone = memo(
  forwardRef<SVGSVGElement, ScrollTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.5 5a1 1 0 0 1 1 1v9h-6.25c-.97 0-1.75.78-1.75 1.75V18a1 1 0 0 1-.9 1h-.1a1 1 0 0 1-1-1V6a3 3 0 0 0-.17-1zM10 10.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm0-3.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clipRule="evenodd" />
        <path d="M20.5 18a1 1 0 0 1-1 1h-8.17a3 3 0 0 0 .17-1v-1h9zM4.5 5a1 1 0 0 1 1 1v2.5h-2V6a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M20.75 15c.97 0 1.75.78 1.75 1.75V18a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-7.5H3.25c-.97 0-1.75-.78-1.75-1.75V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9zm-3.25 0V6a1 1 0 0 0-1-1H7.33a3 3 0 0 1 .17 1v12a1 1 0 0 0 1 1h.1a1 1 0 0 0 .9-1v-1.25c0-.97.78-1.75 1.75-1.75zm-6 3a3 3 0 0 1-.17 1h8.17a1 1 0 0 0 1-1v-1h-9zm-7-13a1 1 0 0 0-1 1v2.5h2V6a1 1 0 0 0-1-1" clipRule="evenodd" />
        <path fill="currentColor" d="M13.5 10.75a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM15 7.25a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ScrollTextFillDuotone.displayName = 'ScrollTextFillDuotone';

export { ScrollTextFillDuotone };
export type { ScrollTextFillDuotoneProps };
