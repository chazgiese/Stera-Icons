import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderBoldDuotone = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m13.69 20.33-.49.09q-1.12.15-2.24.01l-7.4-7.39q-.13-1.12.03-2.24l.08-.49zM17.34 18.61q-.32.26-.65.48-.53.35-1.1.61L4.3 8.4q.27-.56.62-1.09.22-.33.48-.65zM19.7 15.6q-.26.56-.6 1.09-.23.33-.49.65L6.66 5.39q.32-.26.65-.48.53-.35 1.1-.61zM10.8 3.59q1.12-.17 2.24-.02l7.4 7.39q.13 1.12-.02 2.24l-.09.49L10.31 3.67z" opacity={0.4} />
        <path fillRule="evenodd" d="M10.52 1.6c3.15-.44 6.48.55 8.9 2.97 2.43 2.43 3.42 5.76 2.98 8.91-.22 1.52-.77 3-1.64 4.31q-.57.87-1.34 1.63-.75.77-1.63 1.34c-1.32.88-2.8 1.42-4.3 1.64-3.16.44-6.49-.55-8.92-2.98s-3.41-5.75-2.97-8.9c.22-1.52.76-3 1.64-4.31q.57-.87 1.33-1.64t1.64-1.33C7.53 2.36 9 1.82 10.5 1.6M18 6c-1.97-1.97-4.65-2.77-7.21-2.4Q8.93 3.84 7.3 4.9 6.62 5.37 6 5.99 5.37 6.6 4.9 7.3C4.2 8.38 3.76 9.57 3.58 10.8c-.36 2.56.44 5.24 2.4 7.21 1.97 1.97 4.66 2.77 7.22 2.4q1.87-.25 3.49-1.32.69-.46 1.32-1.08.62-.62 1.08-1.32c.7-1.07 1.15-2.26 1.32-3.49.37-2.56-.43-5.25-2.4-7.21" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclePlaceholderBoldDuotone.displayName = 'CirclePlaceholderBoldDuotone';

// Triple export pattern
export { CirclePlaceholderBoldDuotone, CirclePlaceholderBoldDuotone as CirclePlaceholderBoldDuotoneIcon, CirclePlaceholderBoldDuotone as SiCirclePlaceholderBoldDuotone };
export default CirclePlaceholderBoldDuotone;
export type { CirclePlaceholderBoldDuotoneProps };
