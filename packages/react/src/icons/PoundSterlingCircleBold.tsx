import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PoundSterlingCircleBoldProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingCircleBold = memo(
  forwardRef<SVGSVGElement, PoundSterlingCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M11.93 5.79a4.4 4.4 0 0 1 4.35 2.17 1 1 0 1 1-1.7 1.06c-.65-1.05-1.62-1.36-2.37-1.25-.75.1-1.21.6-1.21 1.27v1.75h2.14a1 1 0 0 1 0 2H11v1.76q-.02.68-.31 1.2H16a1 1 0 1 1 0 2H8a1 1 0 0 1-.46-1.89l.08-.03.23-.12q.24-.12.55-.34c.44-.34.6-.63.6-.82v-1.76H8a1 1 0 0 1 0-2h1V9.04c0-1.86 1.4-3.03 2.93-3.25" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

PoundSterlingCircleBold.displayName = 'PoundSterlingCircleBold';

export { PoundSterlingCircleBold };
export type { PoundSterlingCircleBoldProps };
