import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlaskFullBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlaskFullBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlaskFullBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.5 8.92a3 3 0 0 0 .4 1.51l4.7 8.06A3 3 0 0 1 18.03 23H5.98a3 3 0 0 1-2.59-4.51l4.7-8.06a3 3 0 0 0 .41-1.51V3h2v5.92a5 5 0 0 1-.68 2.52l-4.7 8.06a1 1 0 0 0 .86 1.5h12.04a1 1 0 0 0 .86-1.5l-3.65-6.26-1.05-1.8a5 5 0 0 1-.68-2.52V3h2z" opacity={.4} />
        <path fill="currentColor" d="M15.5 1a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="m7.32 15.72.84.37a4.9 4.9 0 0 0 4.65-.43 3 3 0 0 1 2.03-.46l1.68.24-1.29-2.2-.11-.02a5 5 0 0 0-3.42.77 2.9 2.9 0 0 1-2.75.26l-.62-.27z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlaskFullBoldDuotone.displayName = 'FlaskFullBoldDuotone';

export { FlaskFullBoldDuotone };
export type { FlaskFullBoldDuotoneProps };
