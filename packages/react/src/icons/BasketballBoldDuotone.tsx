import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BasketballBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BasketballBoldDuotone = memo(
  forwardRef<SVGSVGElement, BasketballBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.97 3.23q-.1.9-.09 1.87.03 1.55.36 3.21a18 18 0 0 1 2.17-.47 5.3 5.3 0 0 1 1.85-4.55q1.15.3 2.14.86-.3.2-.55.41-.9.74-1.26 1.63-.25.63-.2 1.45c1.9-.1 3.86.1 5.79.6q.5 1.1.7 2.3a17 17 0 0 0-5.85-.92q.41.7 1.06 1.37c.8.84 1.77 1.6 2.82 2.45q.82.65 1.63 1.4a9 9 0 0 1-.9 1.9q-.89-.86-2-1.74c-1-.82-2.1-1.68-3-2.63a9 9 0 0 1-1.76-2.58q-1.11.15-2.18.47a27 27 0 0 0 4.16 8.6q.51.67 1.04 1.25-.97.47-2.05.7l-.6-.76a28 28 0 0 1-4.44-9.1q-.54.24-1.07.53.21.66.26 1.37c.13 1.9-.28 3.74-.45 5.29q-.1.8-.1 1.63a9 9 0 0 1-1.92-1.52l.03-.34c.2-1.83.55-3.26.44-4.93q0-.17-.04-.33-1.4 1.09-2.38 2.52-.45-1.2-.55-2.52.97-1.06 2.15-1.92a7 7 0 0 0-1.68-1.7q.35-.98.89-1.83a9 9 0 0 1 2.49 2.47q.7-.37 1.45-.7A21 21 0 0 1 7.9 4a9 9 0 0 1 2.07-.76" />
    </IconBase>
  ))
);

BasketballBoldDuotone.displayName = 'BasketballBoldDuotone';

export { BasketballBoldDuotone };
export type { BasketballBoldDuotoneProps };
