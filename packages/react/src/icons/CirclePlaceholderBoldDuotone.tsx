import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CirclePlaceholderBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderBoldDuotone = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.83 20.96a9 9 0 0 1-3.07-.24l-6.48-6.48a9 9 0 0 1-.24-3.07zM17.42 19.19q-.83.62-1.78 1.04L3.77 8.36A9 9 0 0 1 4.8 6.58zM20.23 15.64a9 9 0 0 1-1.04 1.78L6.59 4.82a9 9 0 0 1 1.77-1.05zM12 3q1.16 0 2.24.28l6.48 6.48a9 9 0 0 1 .24 3.07l-9.79-9.8Q11.57 3 12 3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclePlaceholderBoldDuotone.displayName = 'CirclePlaceholderBoldDuotone';

export { CirclePlaceholderBoldDuotone };
export type { CirclePlaceholderBoldDuotoneProps };
