import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AtSignFillProps = Omit<IconBaseProps, 'children'>;

const AtSignFill = memo(
  forwardRef<SVGSVGElement, AtSignFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 .5a11.5 11.5 0 0 1 11.44 12.65c-.3 3.03-2.24 5.1-4.66 5.08a4 4 0 0 1-3.38-1.9 5.5 5.5 0 1 1-.68-9.1 1.5 1.5 0 0 1 2.78.77v5c0 .96.26 1.53.51 1.83.24.3.53.4.79.4.43 0 1.46-.41 1.66-2.38q.04-.42.04-.85a8.5 8.5 0 1 0-4.25 7.36 1.5 1.5 0 0 1 1.5 2.6A11.5 11.5 0 1 1 12 .5m0 9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignFill.displayName = 'AtSignFill';

export { AtSignFill };
export type { AtSignFillProps };
