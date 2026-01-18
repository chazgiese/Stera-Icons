import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CoolSFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoolSFillDuotone = memo(
  forwardRef<SVGSVGElement, CoolSFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16 6.48V9h-2.59L13 8.59V7a1 1 0 0 0-2 0v2q0 .42.3.7l4.7 4.71v3.1l-4 3.2-4-3.2V15h2.59l.41.41V17a1 1 0 0 0 2 0v-2a1 1 0 0 0-.3-.7L8 9.58V6.48l4-3.2z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.52 1.12a1 1 0 0 1 1.1.1l5 4A1 1 0 0 1 18 6v4a1 1 0 0 1-1 1h-1.59l2.3 2.3a1 1 0 0 1 .29.7v4a1 1 0 0 1-.37.78l-5 4a1 1 0 0 1-1.26 0l-5-4A1 1 0 0 1 6 18v-4a1 1 0 0 1 1-1h1.59l-2.3-2.3A1 1 0 0 1 6 10V6c0-.3.14-.6.38-.78l5-4zM8 6.48v3.1l4.7 4.71a1 1 0 0 1 .3.71v2a1 1 0 1 1-2 0v-1.59l-.41-.41H8v2.52l4 3.2 4-3.2v-3.1L11.3 9.7A1 1 0 0 1 11 9V7a1 1 0 0 1 2 0v1.59l.41.41H16V6.48l-4-3.2z" clipRule="evenodd" />
    </IconBase>
  ))
);

CoolSFillDuotone.displayName = 'CoolSFillDuotone';

export { CoolSFillDuotone };
export type { CoolSFillDuotoneProps };
